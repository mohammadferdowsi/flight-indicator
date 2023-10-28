## Description

Provides error throwing functionality

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Failure is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
try{
    Failure.throwError("This is a error message");
} catch (e){
    // Catch the Error
}

try{
    Failure.throwTypeError("This is a type error message");
} catch (e){
    // Catch the TypeError
}
```
- Use it with require.js
```js
require(["path/to/Failure"], function(Failure){
    // Work with Failure
});
```
- Use it with node.js
```js
var Failure = require("jean-failure");
```
## Installation

`npm install jean-failure --save --legacy-bundling`

## API Reference

### Failure.throwError(errorMessage) 

Throws an Error with the provided errorMessage

**Parameters**
- **errorMessage**: `String` -  Message which shall be displayed for this Error

**Throws**
- `Error`

### Failure.throwTypeError(errorMessage) 

Throws an TypeError with the provided errorMessage

**Parameters**
- **errorMessage**: `String` -  Message which shall be displayed for this TypeError

**Throws**
- `TypeError`

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT