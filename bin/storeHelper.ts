import * as path from 'path';
import * as prettier from 'prettier';
import * as _ from 'lodash';
import * as fs from 'fs';
const ProjectDir = process.cwd();
const projPath = (file: string) => path.join(ProjectDir, file);
const normalize = (files: string[]) => files.filter(item => !item.includes('index.ts'));

const genDts = (files: string[]) => {
  const importCode = [];
  const modules = [];

  files.forEach(item => {
    // 删除扩展名称
    const importpath = item.replace(/(.*)\.(ts|js)$/, '$1');
    const pathNormalize = item.replace(/(.*store\/)(.*?)\.ts$/, '$2');
    // 转换为数组
    let pathsegs = pathNormalize.split('/');
  
    // 转换类名
    const className = pathsegs.map(it => _.startCase(it)).join('');
    // 转换 namespace 为 snake_case
    const namespace = _.snakeCase(className);

    importCode.push(`import ${className} from '~/${importpath}'`);

    modules.push(`
    ${namespace} : {
      mutation: MutaionAction2Mutation<FunctionProperties<${className}>>;
      action: AsyncFunctionProperties<${className}>;
      getter: Pick<${className}, ReadonlyKeys<${className}>>;
      state: Omit<${className}, (keyof VuexModule) | FunctionPropertyNames<${className}> | ReadonlyKeys<${className}>>;
    };
    `);
  });

  return `/** this file is auto generator , please don't edit it*/
import {VuexModule} from 'vuex-module-decorators';
${importCode.join('\n')}

interface StoreHelper {
  ${modules.join('\n')}
}

declare module 'vue/types/vue' {
  interface Vue {
    $storeHelper: StoreHelper;
  }
}

declare module '@nuxt/vue-app/types/index' {
  interface Context {
    $storeHelper: StoreHelper;
  }
}
`;
};

const changedfile = normalize([
  'store/index.ts',
  'store/home.ts',
  'store/demo/cache.ts',
  'store/demo/task.ts',
  'store/theme.ts',
  'store/cache.ts',
  'store/user.ts',
]);

prettier
  .resolveConfig(projPath('.prettierrc'))
  .then(config => {
    // pretter format option
    config['parser'] = 'typescript';
    const dtsCode = prettier.format(genDts(changedfile), config);
    fs.writeFileSync(path.join(process.cwd(), 'types/storeHelper.d.ts'), dtsCode, { encoding: 'utf8' });
  })
  .catch(console.error);
