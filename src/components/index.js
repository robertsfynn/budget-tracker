const context = require.context('./', true, /\.js$/);

context.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = context(key).default;
});
