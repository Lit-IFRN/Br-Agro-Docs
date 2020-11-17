---
id: collector-code-javascript
title: JavaScript
sidebar_label: JavaScript
---

Em todas as requisições é necessário passar o seu token de acesso, isso pode ser feito através de um header`Authorization`

```javascript
var headers = new Headers();
headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkyNzQwNjE1fQ.vLjSIt8rWmZs9dGT_waJKWJzjenicLrEZINisZVCRN0");
```

## Listar todos os objetos peripheral

```javascript
var headers = new Headers();
headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkyNzQwNjE1fQ.vLjSIt8rWmZs9dGT_waJKWJzjenicLrEZINisZVCRN0");

var requestOptions = {
  method: 'GET',
  headers
};

fetch("http://localhost:5000/peripherals", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

----

## Show

Listar apenas um objeto Peripheral.

```javascript
var headers = new Headers();
headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkyNzQwNjE1fQ.vLjSIt8rWmZs9dGT_waJKWJzjenicLrEZINisZVCRN0");

var requestOptions = {
  method: 'GET',
  headers
};

fetch("http://localhost:5000/peripherals/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

----

## Store

Criar um objeto Peripheral.

```javascript
var headers = new Headers();
headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkyNzQwNjE1fQ.vLjSIt8rWmZs9dGT_waJKWJzjenicLrEZINisZVCRN0");

var body = {
	"id": 1,
	"activity": 1233
}

var requestOptions = {
  method: 'POST',
  headers,
  body: JSON.stringify(body)
};

fetch("http://localhost:5000/peripherals", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

----

## Update

Atualizar um objeto Peripheral.

```javascript

var headers = new Headers();
headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkyNzQwNjE1fQ.vLjSIt8rWmZs9dGT_waJKWJzjenicLrEZINisZVCRN0");

var body = {
	activity: 3
}

var requestOptions = {
  method: 'PUT',
  headers
  body: JSON.stringify(body)
};

fetch("http://localhost:5000/peripherals/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## Delete

Deletar um objeto Peripheral.

```javascript

var headers = new Headers();
headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkyNzQwNjE1fQ.vLjSIt8rWmZs9dGT_waJKWJzjenicLrEZINisZVCRN0");

var requestOptions = {
  method: 'DELETE',
  headers
};

fetch("http://localhost:5000/peripherals/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
