---
id: collector-code-python
title: Python
sidebar_label: Python
---
In all requests you need to pass your access token, this can be done through a header `Authorization`

```python
headers = {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
}
```

## Index
List all peripheral objects

```python
import requests
import json

url = "http://localhost:5000/peripherals"

headers = {
  'Authorization': 'Bearer YOUR_TOKEN_HERE'
}

response = requests.get(url, headers=headers)
data = json.loads(response.text)

print(data)
```

----

## Show

List only one Peripheral object.

>Note that the route parameter must be the id of an existing Peripheral, to see the existing Peripheral just look at the Index section.

```python
import requests
import json

url = "http://localhost:5000/peripherals/1"

headers = {
  'Authorization': 'Bearer YOUR_TOKEN_HERE'
}

response = requests.get(url, headers=headers)
data = json.loads(response.text)

print(data)
```

----

## Store

Create a Peripheral object.

```python
import requests
import json

payload = {
	"id": 1,
	"activity": 2
}

url = "http://localhost:5000/peripherals"

headers = {
  "Authorization": "Bearer YOUR_TOKEN_HERE",
  "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, data = json.dumps(payload))
data = json.loads(response.text)

print(data)
```

----

## Update

Update a Peripheral object.

>Note that the route parameter must be the id of an existing Peripheral, to see the existing Peripheral just look at the Index section.



```python
import requests
import json

payload = {
	"activity": 2
}

url = "http://localhost:5000/peripherals/1"

headers = {
  "Authorization": "Bearer YOUR_TOKEN_HERE",
  "Content-Type": "application/json"
}

response = requests.put(url, headers=headers, data = json.dumps(payload))
data = json.loads(response.text)

print(data)
```

----

## Delete

Delete a Peripheral object.

>Note that the route parameter must be the id of an existing Peripheral, to see the existing Peripheral just look at the Index section.



```python
import requests
import json

url = "http://localhost:5000/peripherals/1"

headers = {
  'Authorization': 'Bearer YOUR_TOKEN_HERE'
}

response = requests.delete(url, headers=headers)
data = json.loads(response.text)

print(data)
```

