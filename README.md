# promise-everything
[![Build Status](https://travis-ci.org/bash/promise-everything.svg?branch=master)](https://travis-ci.org/bash/promise-everything) 
[![npm version](https://badge.fury.io/js/promise-everything.svg)](https://badge.fury.io/js/promise-everything)
[![Coverage Status](https://coveralls.io/repos/bash/promise-everything/badge.svg?branch=master&service=github)](https://coveralls.io/github/bash/promise-everything?branch=master)
[![Inline docs](http://inch-ci.org/github/bash/promise-everything.svg?branch=master&style=shields)](http://inch-ci.org/github/bash/promise-everything)

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
    
// node.js - style
fs.readFile('.editorconfig', 'utf8', function(err, data){
    // ...
});

// with promises
call(fs.readFile, '.editorconfig', 'utf8').then(function(data){
    console.log(data);
});
```
