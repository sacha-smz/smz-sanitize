# smz-sanitizer

Simple input sanitizer for Express.js

## Usage

```sh
npm i smz-sanitizer
```

```js
const express = require("express");
const sanitizer = require("smz-sanitizer");

const app = express();
app.use(express.urlencoded({ extended: true }), express.json(), sanitizer);

// ...
```
