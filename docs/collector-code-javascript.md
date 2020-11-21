---
id: collector-code-javascript
title: JavaScript
sidebar_label: JavaScript
---

In all requests you need to pass your access token, this can be done through a header `Authorization`

```javascript
const headers = {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
}
```

## Index
List all peripheral objects
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

List only one Peripheral object.

>Note that the route parameter must be the id of an existing Peripheral, to see the existing Peripheral just look at the [`Index section`](/docs/en/collector-code-javascript#index).

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

Create a Peripheral object.

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

Update a Peripheral object.

>Note that the route parameter must be the id of an existing Peripheral, to see the existing Peripheral just look at the [`Index section`](/docs/en/collector-code-javascript#index).



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

Delete a Peripheral object.

>Note that the route parameter must be the id of an existing Peripheral, to see the existing Peripheral just look at the [`Index section`](/docs/en/collector-code-javascript#index).

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
