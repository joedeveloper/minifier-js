Package.describe({
  name: 'unomi:minifier-js',
  summary: "JavaScript minifier",
  version: "2.0.0"
});

Npm.depends({
  "source-map": "0.5.6",
  "uglify-es": "git+https://github.com/mishoo/UglifyJS2.git#2ed3f8db4482025446999461aab5a6ea36c9896a",
});

Package.onUse(function (api) {
  api.use('babel-compiler');
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
