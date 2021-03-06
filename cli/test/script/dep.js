// Generated by CoffeeScript 1.10.0
(function() {
  var common, worker;

  common = require("./common");

  worker = GlobalContext.createDedicateWorker(["worker", "common"], {
    contextName: "WorkerContext",
    entryFunction: function() {
      return WorkerContext.require("worker");
    }
  });

  worker.addEventListener("message", function(e) {
    if (e.data === "ready") {
      console.log("worker ready");
      worker.postMessage(common.getTestData());
      return;
    }
    if (e.data === common.getTestData()) {
      alert("Work works!");
    }
  });

}).call(this);
