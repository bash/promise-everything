# promise-everything [![Build Status](https://travis-ci.org/bash/promise-everything.svg?branch=master)](https://travis-ci.org/bash/promise-everything)
Use node.js - style callback functions as Promises

## Installation

```bash
npm install --save promise-everything
```

## Usage

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