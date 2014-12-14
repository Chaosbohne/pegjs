Package.describe({
  name: 'chaosbohne:pegjs',
  summary: "Adds PEG to your app",
  version: "0.1.0",
  git: "https://github.com/Chaosbohne/simplecontactform"
});


Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
    
  api.addFiles(["peg.js"],["client","server"]);
  
  api.export('PEG');
});