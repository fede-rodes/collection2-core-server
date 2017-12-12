Package.describe({
  name: 'orcprogramming:collection2-core-server',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript@0.6.1');
  api.use('aldeed:collection2-core@2.0.4', 'server');
  api.mainModule('collection2-core-server.js', 'server');
  api.export('Collection2', 'server');
});

Npm.depends({
  'simpl-schema': '1.2.1',
});