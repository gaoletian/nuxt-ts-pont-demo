"use strict";
exports.__esModule = true;
var path = require("path");
var prettier = require("prettier");
var _ = require("lodash");
var fs = require("fs");
var ProjectDir = process.cwd();
var projPath = function (file) { return path.join(ProjectDir, file); };
var normalize = function (files) { return files.filter(function (item) { return !item.includes('index.ts'); }); };
var genDts = function (files) {
    var importCode = [];
    var modules = [];
    files.forEach(function (item) {
        // 删除扩展名称
        var importpath = item.replace(/(.*)\.(ts|js)$/, '$1');
        var pathNormalize = item.replace(/(.*store\/)(.*?)\.ts$/, '$2');
        // 转换为数组
        var pathsegs = pathNormalize.split('/');
        // 转换类名
        var className = pathsegs.map(function (it) { return _.startCase(it); }).join('');
        // 转换 namespace 为 snake_case
        var namespace = _.snakeCase(className);
        importCode.push("import " + className + " from '~/" + importpath + "'");
        modules.push("\n    " + namespace + " : {\n      mutation: MutaionAction2Mutation<FunctionProperties<" + className + ">>;\n      action: AsyncFunctionProperties<" + className + ">;\n      getter: Pick<" + className + ", ReadonlyKeys<" + className + ">>;\n      state: Omit<" + className + ", (keyof VuexModule) | FunctionPropertyNames<" + className + "> | ReadonlyKeys<" + className + ">>;\n    };\n    ");
    });
    return "/** this file is auto generator , please don't edit it*/\nimport {VuexModule} from 'vuex-module-decorators';\n" + importCode.join('\n') + "\n\ninterface StoreHelper {\n  " + modules.join('\n') + "\n}\n\ndeclare module 'vue/types/vue' {\n  interface Vue {\n    $storeHelper: StoreHelper;\n  }\n}\n\ndeclare module '@nuxt/vue-app/types/index' {\n  interface Context {\n    $storeHelper: StoreHelper;\n  }\n}\n";
};
var changedfile = normalize([
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
    .then(function (config) {
    // pretter format option
    config['parser'] = 'typescript';
    var dtsCode = prettier.format(genDts(changedfile), config);
    fs.writeFileSync(path.join(process.cwd(), 'types/storeHelper.d.ts'), dtsCode, { encoding: 'utf8' });
})["catch"](console.error);
