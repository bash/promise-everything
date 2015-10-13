# promise-everything [![Build Status](https://travis-ci.org/bash/promise-everything.svg?branch=master)](https://travis-ci.org/bash/promise-everything)
Use node.js - style callback functions as Promises

## Installation

```bash
npm install --save promise-everything
```

## Usage

The function **fn** will be called with the arguments **args** + a callback that should be invoked with error + value.

```javascript  
call(fn, [...args]) // => Promise(...)
```

## Example

```javascript
var call = require('promise-everything'),
    fs   = require('fs');
    
call(fs.readFile, '.editorconfig').then(function(data){
    console.log(data);
});
```