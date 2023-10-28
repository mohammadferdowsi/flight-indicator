
## Description

Provides functionality to check, if an  class implements functions which are defined interface-like in an base class.

## Breaking Changes
- Interface.isImplemented has been removed and replaced by Interface.areMethodsImplemented

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Interface is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var BaseClass = (function (){
    var BaseClass = function(options){
        // If inherting class does not implement "a" & "b" in constructor
        // a error is fired
        Interface.areMembersImplemented(["a", "b"], this); 
        // If inheriting class does not implement "add" & "remove" in prototype
        // a error is fired
        Interface.areMethodsImplemented(["add", "remove"], this); 
    };
    return BaseClass;
})();

var ChildClass = (function(){
    var ChildClass = function(){
        BaseClass.call(this);
        this.a = "a";
        this.b = "b";
    };
    // Interface method
    ChildClass.prototype.add = function () {};
    // Interface method
    ChildClass.prototype.remove = function(){};
    return ChildClass;
})();   
```
- Use it with require.js
```javascript
require(["path/to/Interface"], function(Interface){
    // Work with Interface
});
```
- Use it with node.js
```js
var Interface = require("jean-interface");
```

## Installation

`npm install jean-interface --save --legacy-bundling`

## API Reference

### Interface.areMmbersImplemented(memberList, instance) 

Checks if `memberList` is implemented in constructor of `instance`

**Parameters**
- **memberList**: `String[]` - Contains all member names
- **instance**: `Object` - Object which should be checked

**Returns**: 
- `Boolean` - True, if members are implemented, otherwise error will be thrown

### Interface.areMethodsImplemented(methodList, instance) 

Checks if `methodList`, is implemented in prototype of `instance`

**Parameters**
- **methodList**: `String[]` - Contains all method names
- **instance**: `Object` - Object which should be checked

**Returns**: 
- `Boolean` - True, if methods are implemented, otherwise error will be thrown

## Tests

Open spec/spec-runner.html in browser to see the test cases.

## License

MIT