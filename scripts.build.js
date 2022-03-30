const path = require('path');
const { frontendCompiler } = require('@rockpack/compiler');

frontendCompiler({
  styles: 'styles.css',
  vendor: ['react', 'react-dom'],
  html: {
    template: path.resolve(__dirname, './index.ejs'),
    favicon: path.resolve(__dirname, './favicon.ico')
  },
}, (config, modules) => {
  if (process.env.NODE_ENV === 'production') {
    config.output.publicPath = './';
  }
  const { use } = modules.get('scssModules')[0];
  const cssLoader = use[2];
  cssLoader.options.modules = {
    localIdentName: "[local]___[hash:base64:5]"
  }
  Object.assign(config.resolve, {
    alias: {
      fonts: 'src/assets/fonts'
    }
  });
});
