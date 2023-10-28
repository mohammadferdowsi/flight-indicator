(function () {
var require,define;!function(e){function r(e){for(var r=0,n=[];r<e.length;r++){var o=t.resolved[e[r]];o&&n.push(o)}return n}function n(){for(var e in t.unresolved){var n=t.unresolved[e],l=r(n.dependencies);o(e,n.factory,n.dependencies,l,!1)}}function o(e,r,n,o,l){o.length===n.length?t.resolved[e]=r.apply(r,o):l&&(t.unresolved[e]={dependencies:n,factory:r})}var t={resolved:{},unresolved:{}};define=function(e,l,i){t.resolved[e]||"string"==typeof e&&Array.isArray(l)&&"function"==typeof i&&(0===l.length?o(e,i,l,[],!1):o(e,i,l,r(l),!0),n())},require=function(e,n){var o=r(e=Array.isArray(e)?e:[e]);if(1===o.length&&!n)return o[0];if(o.length!==e.length||!n)throw new Error("Not all modules are resolved");n.apply(n,o)}}();
define("../dist/jean-amd.min", function(){});

define('Hello',[], function () {
    return { value: "Hello" };
});
define('World',[], function () {
    return { value: "World" };
});
define('Writer',["Hello", "World"], function (Hello, World) {
    return { value: Hello.value + " " + World.value };
});
require(["Writer"], function(Writer){
    document.getElementById("output").innerHTML = Writer.value;
});
define("RequireWriter", function(){});

}());