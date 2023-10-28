## Description

Provides a minimal AMD loader for use when all modules are optimized with r.js into one file. No aim for full implementation of the AMD spec, just for the basic work. Espacially made for small projects that do not want a loader that is much bigger than the project source code itself.

## Restrictions
- All modules must be located into one file
- All modules must have ids, dependency arrays and a factory function
- No loading of modules, which have unresolved dependencies
- No circular dependency support
- No dynamic code loading

## Example
This example shall provide a workflow to develop a application and use jean-amd as the AMD loader of choice. Therefore we implemented a simple app, which
writes "Hello World" into the browser window. For this, the following files will be added: 

```
-- example
   - ModuleHello.js
   - ModuleWorld.js
   - ModuleWriter.js
   - RequireWriter.js
   - build.js
   - index.js
```

`ModuleHello` shall provide the first part "Hello".
```js
define([], function () {
    return { value: "Hello" };
});
```
`ModuleWorld` shall provide the second part "World".
```js
define([], function () {
    return { value: "World" };
});
```
`ModuleWriter` shall concat the two parts into one and provide the value it.
```js
define(["Hello", "World"], function (Hello, World) {
    return { value: Hello.value + " " + World.value };
});
```

With the following require call, we load the "Writer" module, get his value, and write it into the browser web page.
```js
require(["Writer"], function(Writer){
    document.getElementById("output").innerHTML = Writer.value;
});
```
Implementation of our application is ready, now we have to
build it, so it can run within a html page. For this, the following instructions, have to include into `build.js`:

```js
({
    baseUrl: '.',
    // The output file
    out: 'app.js',
    // Pass 'uglify2' instead of 'none' if you want to 
    // optimize it
    optimize: 'none',
    // Include jean-amd into your build, Note that the
    // development version fires warnings, while the 
    // minified version go silently over it
    name: "../dist/jean-amd.min",
    // Include RequireWriter.js - It will be used as
    // the entry point, from which the modules will be
    // loaded
    include: ["RequireWriter"],
    // Wrap it into a function, to protect the scope
    wrap: true,
    // Provide the paths to your modules. It is important,
    // that this list is maintained carefuly.
     paths:{
       Writer: "ModuleWriter",
       Hello: "ModuleHello",
       World: "ModuleWorld",
    }
})
```

Now you have to fire the following command, to build your module. 

```js
// if r.js is not installed yet, 
// run npm install -g requirejs
r.js.cmd -o build.js
```

You get one file with includes jean-amd and the modules.
Within `index.html` the created file `app.js` must be referenced. Take a look at `app.js` if you want to see how r.js builds the modules together with `jean-amd`.

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="output"></div>
        <script type="text/javascript" src="app.js"></script>
    </body>
</html>
```


If you now open this html page in your browser,
`Hello World` should be displayed.

## Installation

`npm install jean-amd --save --legacy-bundling`


## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT