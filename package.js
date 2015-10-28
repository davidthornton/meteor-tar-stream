Package.describe({
  name: 'davidthornton:tar-stream',
  version: '1.2.2_1',
  summary: 'Meteor smart package for the tar-stream node.js package',
  git: 'https://github.com/davidthornton/meteor-tar-stream.git',
  documentation: 'README.md'
});

Npm.depends({
   'tar-stream': '1.2.2' 
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('tar-stream.js','server');
  api.export('tarStream');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('davidthornton:tar-stream', 'server');
  api.addFiles('tar-stream-tests.js', 'server');
});
