// Generated by CoffeeScript 1.7.1
(function() {
  var context;

  context = new LeafRequire({
    root: "./"
  });

  context.use("index.js", "ana.js", "bob.js");

  context.use("root.js", "sub/qubi.js", "sub/madoka.js");

  context.load(function() {
    console.log("loaded");
    context.require("index.js");
    return context.require("root.js");
  });

}).call(this);
