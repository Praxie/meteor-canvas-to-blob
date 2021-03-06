Package.describe({
  name: 'praxie:canvas-to-blob',
  version: '1.1.1',
  summary: 'JavaScript Canvas to Blob is a function to convert canvas elements into Blob objects',
  git: 'https://github.com/Praxie/meteor-canvas-to-blob.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('canvas-to-blob.js', 'client');
});