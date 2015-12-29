Package.describe({
  name: 'polguixe:meteor-clipperjs',
  version: '6.1.3',
  // Brief, one-line summary of the package.
  summary: 'ClipperJs library wrapped for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PolGuixe/meteor-clipperjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
//Dependencies
  api.versionsFrom('1.2.1');

  //Main Library
  api.addFiles('lib/clipper_unminified.js');
  api.export('ClipperLib');
});
