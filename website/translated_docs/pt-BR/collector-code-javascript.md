---
id: collector-code-javascript
title: JavaScript
sidebar_label: JavaScript
---

Em todas as requisições é necessário passar o seu token de acesso, isso pode ser feito através de um header`Authorization`

```javascript
const headers = {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
}
```

## Index
Listar todos os objetos peripheral
```javascript
var requestOptions = {
  method: 'GET',
  headers: {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  }
};

fetch("http://localhost:5000/peripherals", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

----

## Show

Listar apenas um objeto Peripheral.

>Note que o parâmetro da rota deve ser o id de um Peripheral existente, para ver os Peripheral existentes basta olhar a [`seção index`](/docs/pt-BR/collector-code-javascript#index).

```javascript
var requestOptions = {
  method: 'GET',
  headers: {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  }
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
var body = {
	"id": 1,
	"activity": 1233
}

var requestOptions = {
  method: 'POST',
  headers: {
    "Authorization": "Bearer YOUR_TOKEN_HERE",
    'Content-Type': 'application/json'
  },
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

>Note que o parâmetro da rota deve ser o id de um Peripheral existente, para ver os Peripheral existentes basta olhar a [`seção index`](/docs/pt-BR/collector-code-javascript#index).

```javascript
var body = {
	activity: 3
}

var requestOptions = {
  method: 'PUT',
  headers: {
    "Authorization": "Bearer YOUR_TOKEN_HERE",
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
};

fetch("http://localhost:5000/peripherals/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## Delete

Deletar um objeto Peripheral.

>Note que o parâmetro da rota deve ser o id de um Peripheral existente, para ver os Peripheral existentes basta olhar a [`seção index`](/docs/pt-BR/collector-code-javascript#index).

```javascript
var requestOptions = {
  method: 'DELETE',
  headers: {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  }
};

fetch("http://localhost:5000/peripherals/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
