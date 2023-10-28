## Description

Provides functionality for inheriting constructor and prototype values and methods

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Inheritance is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var Testator = (function(){
    var Testator = function(options){
        id = options.id;
    };
    Testator.prototype.methodOne = function(){};
    Testator.prototype.methodTwo = function(){};
    return Testator;
})();
var Inheritor = (function(){
    var Inheritor = function(options){
        // Inherits and initialises constructor values from Testator
        Inheritance.inheritConstructor(Testator, this, options);
        this.name = "Inheritor";
    };
    // Inherits all prototype methods from Testator
    Inheritance.inheritPrototype(Inheritor,Testator);
    return Inheritor;
})();
// -----------------------------------
// Create inheritor object
var inheritor = new Inheritor({ id: "123"});
//Use constructor values
inheritor.id; // 123
inheritor.name; // Inheritor
 //Use prototype methods
inheritor.methodOne();
inheritor.methodTwo();
```
- Use it with require.js
```js
require(["path/to/Inheritance"], function(Inheritance){
    // Work with Inheritance
});
```
- Use it with node.js
```js
var Inheritance = require("jean-inheritance");
```

## Installation

`npm install jean-inheritance --save --legacy-bundling`

## API Reference

### inheritConstructor(testator, instance, options) 

Inherits constructor values

**Parameters**

- **testator**: `function` - Testator constructor which must be called for inheritance

- **instance**: `Object` - this value of the inheritor

- **options**: `Any[] | Object` - Options, which will be passed to the testator

**Returns**:
- `Boolean` - True if constructor values are inherited, false otherwise


### inheritPrototype(inheritor, testator) 

Inherits prototype from testator to inheritor

**Parameters**

- **inheritor**: `function` - The method which will be inherited from testator

- **testator**: `function` - The method which pass its prototype to inheritor

**Returns**:
- `Boolean` - True if prototype values are inherited, false otherwise

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT