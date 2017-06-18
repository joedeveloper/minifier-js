Package.describe({
  name: 'unomi:minifier-js',
  summary: "JavaScript minifier",
  version: "2.0.0"
});

Npm.depends({
  "source-map": "0.5.6",
  "uglify-js": "git+https://github.com/mishoo/UglifyJS2#harmony-v2.8.22",
});

Package.onUse(function (api) {
  api.use('babel-compiler@6.18.1');
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
