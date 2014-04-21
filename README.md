# leaf-require

A experiment lib allow you use nodejs style sync require in browser without precompile ... written in coffee. 

## Feature
* do what common module do.
* localStorage cache support
* version support
* source map support, you will not notice any difference of your code when debug, just like directly include them on the html.

## example

All the example script can be found at /example.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script type="text/javascript" src="../leaf-require.js"></script>
    <script type="text/javascript" src="./init.js"></script>
  </head>
  <body>
  </body>
</html>
```

```javascript
  //init.js
  var context;

  context = new LeafRequire({
    root: "./test/"
  });

  context.use("a.js", "b.js", "c.js", "main.js", "sub/subA.js", "sub/subB.js", "rootA.js");

  context.load(function() {
    console.log("inited");
    context.require("main.js");
    // main will require a.js 
    // a.js will require b.js and c.js
    // b.js will require a.js
    
    context.require("sub/subA.js");
    // sub/subA.js will require rootA.js
    // rootA.js will require sub/subB.js
    // 
  });
```

# difference with commonjs module
```require("a.js")``` will be /{root}/{requiringScriptPath}/a.js

```require("/a.js")``` will be /{root}/a.js

```require("/a")``` will be /{root}/a and then /{root}/a.js

# useful features

```javascript

context.enableCache = true  // try load script from local storage first
context.clearCache()        // clear cache so force an reload
context.version = "0.0.0"   // different script cached by versions, a version change will force a reload
context.debug = true        // enable source map feature for easier debug
```

# test
Testcase require nodejs and grunt
```bash
npm install
npm test
```
and open http://localhost:3000/test/index.html to see the result.