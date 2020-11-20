---
id: collector-code-javascript
title: JavaScript
sidebar_label: JavaScript
---


## Index

Listar todos os objetos Peripheral.

```javascript
var headers = new Headers();
headers.append("Authorization", "Bearer YOUR_TOKEN_HERE");

var requestOptions = {
  method: 'GET',
  headers
};

fetch("http://localhost:5000/peripherals", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
