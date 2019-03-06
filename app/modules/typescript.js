import path from 'path';

export default function NuxtTypeScript(moduleOptions) {
  // Resolve config paths
  const cwd = process.cwd();

  // Build module options
  const options = Object.assign({
      tsconfig: 'tsconfig.json',
      babel: {}
    },
    this.options.typescript,
    moduleOptions
  );
  const tsconfig = path.resolve(cwd, options.tsconfig);

  // Rule finder
  const findRule = (config, loader) => config.module.rules.find(rule => rule.loader === loader);

  // Module rule factory
  const createRule = test => ({
    test: test,
    use: []
  });

  // Resolve .ts and .tsx file extensions
  this.nuxt.options.extensions.unshift('tsx', 'ts');

  // Extend webpack config
  this.extendBuild(config => {
    let log = (...arg) => console.log('\x1b[36mmodules:%s\x1b[0m', `typescript:${config.name}`, ...arg);

    const nuxtVueRule = findRule(config, 'vue-loader');
    const nuxtBabelOptions = this.options.build.babel;

    // log('nuxtVueRule = ', nuxtVueRule);
    // log('nuxtBabelOptions = ', nuxtBabelOptions);

    // Babel loader factory
    const babelPreset = {
      presets: [
        [
          require.resolve('@nuxtjs/babel-preset-app'),
          {
            buildTarget: config.name
          }
        ]
      ]
    };
    const babelLoader = () => ({
      loader: 'babel-loader',
      options: Object.assign({}, nuxtBabelOptions, options.babel, babelPreset)
    });

    // TypeScript loader factory
    const tsLoader = loaderOptions => ({
      loader: 'ts-loader',
      options: Object.assign({
          configFile: tsconfig,
          transpileOnly: true
        },
        loaderOptions
      )
    });

    // Resolve .ts and .tsx file extensions
    config.resolve.extensions.unshift('.tsx', '.ts');

    // Create TypeScript rule
    const tsRule = createRule(/\.tsx?$/);
    // Add babel-loader
    tsRule.use.push(babelLoader());

    // Add ts-loader
    tsRule.use.push(
      tsLoader({
        appendTsxSuffixTo: [/\.vue$/]
      })
    );

    config.module.rules.push(tsRule);
  });
};