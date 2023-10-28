## Description

Provides functionality for type checking 

## Support
Supports both CommonJS and AMD eco system. If there is no loader, TypeCheck is registered as a browser variable.

## Code Example
- Use it as browser variable 
```js
function A(){ }
TypeCheck.isString(""); // true
TypeCheck.isBoolean(true); // true
TypeCheck.isNumber(1); // true
TypeCheck.isObject({ name: "jean" }); // true
TypeCheck.isEmptyObject({}); // true
TypeCheck.isFunction(function(){}); // true
TypeCheck.isDefined(undefined); //false
TypeCheck.isArray([]); // true
TypeCheck.isEmptyArray([]); // true
TypeCheck.isArrayTypeOf(["1","2", "3"], "number"); // true
TypeCheck.areObjectsInstanceOf([new A(), new A(), new A()], A); // true
TypeCheck.isInstanceOf(new A(), A); // true
TypeCheck.isEnumValue("test", { TEST: "test" }); // true
``` 

- Use it with require.js 
```javascript
require(["path/to/TypeCheck"], function(TypeCheck){
    // Work with TypeCheck
});
```
- Use it with node.js
```js
var TypeCheck = require("jean-type-check");
``` 
## Installation

`npm install jean-type-check --save --legacy-bundling`

## API Reference

### TypeCheck.isString(o) 

Checks if provided element type is string

**Parameters**
 - **o**: `Any` - element to be checked

**Returns**
- `Boolean` - True, if element type is string, false otherwise


### TypeCheck.isBoolean(o) 

Checks if provided element type is boolean

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
- `Boolean` - True, if element type is boolean, false otherwise


### TypeCheck.isNumber(o) 

Checks if provided element type is number

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
-  `Boolean` - True, if element type is number, false otherwise


### TypeCheck.isObject(o) 

Checks if provided element is an object

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
 - `Boolean` - True, if element is object, false otherwise


### TypeCheck.isEmptyObject(o) 

Checks if provided element is an empty object

**Parameters**
- **o**: `Any` - element to be checked

**Returns** 
- `Boolean` - True, if element is empty, false otherwise


### TypeCheck.isFunction(o) 

Checks if provided element is a function

**Parameters**
- **o**: `Any` - element to be checked

- **Returns** `Boolean` - True, if element is a function, false otherwise


### TypeCheck.isDefined(o) 

Checks if provided element is defined

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
- `Boolean` - True, if element is defined, false otherwise


### TypeCheck.isArray(o) 

Checks if provided element is an array

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
- `Boolean` - True, if element is an array, false otherwise

### TypeCheck.isEmptyArray(o) 

Checks if provided element is an empty array

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
- `Boolean` - True, if element is an empty array, false otherwise


### TypeCheck.isArrayTypeOf(array, type) 

Checks if all elements in this array have the same type

**Parameters**
- **array**: `Any[]`, Array to be checked
- **type**: `String`, Type of elements in this array. Valid values are all which matches 
                       to the typeof operator

**Returns**
- `Boolean` -  True, if all elements have the same type, false otherwise

### TypeCheck.areObjectsInstanceOf(array, fn) 

Checks if all objects within array have the same instance

**Parameters**
- **array**: `Object[]`, The array which objects shall be checked
- **fn**: `Function`, The constructor function

**Returns**
- `Boolean` -  True, if all elements have the same instance, false otherwise

### TypeCheck.areObjectsInstancesOf(objects, constructors) 

Checks if the objects have are instances of the provided constructors

**Parameters**
- **objects**: `Object[]`, The array which objects shall be checked
- **constructors**: `Function[]`, The constructor functions

**Returns**
- `Boolean` -  True, if the elements are instances of the provided constructors, false otherwise

### TypeCheck.isInstanceOf(child, parent) 

Checks if child is an instance of parent

**Parameters**
- **child**: `Object`, The object which shall be checked
- **parent**: `Function`, The function which shall be the constructor

**Returns**
- `Boolean` -  True, if child is an instance of parent, false otherwise

### TypeCheck.isEnumValue(value, o) 

Checks if the provided value is a value of the provided object which is used as an enum

**Parameters**
- **value**: `String|Number`, The value
- **o**: `Object`, The object which shall be checked

**Returns**
- `Boolean` -  True if value is part of o, false otherwise

## Tests

Open spec/spec-runner.html in browser to see the test cases.

## License

MIT