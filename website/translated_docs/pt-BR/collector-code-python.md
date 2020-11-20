---
id: collector-code-python
title: Python
sidebar_label: Python
---
Em todas as requisições é necessário passar o seu token de acesso, isso pode ser feito através de um header`Authorization`

```python
headers = {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
}
```

## Index
Listar todos os objetos peripheral
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

Listar apenas um objeto Peripheral.

>Note que o parâmetro da rota deve ser o id de um Peripheral existente, para ver os Peripheral existentes basta olhar a [`seção index`](/docs/pt-BR/collector-code-python#index).

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

Criar um objeto Peripheral.

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

Atualizar um objeto Peripheral.

>Note que o parâmetro da rota deve ser o id de um Peripheral existente, para ver os Peripheral existentes basta olhar a [`seção index`](/docs/pt-BR/collector-code-python#index).



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

Deletar um objeto Peripheral.

>Note que o parâmetro da rota deve ser o id de um Peripheral existente, para ver os Peripheral existentes basta olhar a [`seção index`](/docs/pt-BR/collector-code-python#index).



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

