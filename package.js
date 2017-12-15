Package.describe({
  name: 'orcprogramming:collection2-core-server',
  version: '0.0.4',
  summary: 'Limit the scope of aldeed:collection2-core to the server',
  git: 'https://github.com/fede-rodes/collection2-core-server.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('ecmascript@0.6.1');
  // Limit the scope of aldeed:collection2-core to be server side only
  api.use('aldeed:collection2-core@2.1.0', 'server');
  api.mainModule('collection2-core-server.js', 'server');
  api.export('Collection2', 'server');
});
