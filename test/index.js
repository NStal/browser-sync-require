// Generated by CoffeeScript 1.7.1
(function() {
  window.mainLoaded = true;

  test("require a module from the same folder", function() {
    return ok(require("ana.js").name === "ana");
  });

}).call(this);
