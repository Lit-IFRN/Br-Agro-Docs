---
id: collector-farm
title: Farm
sidebar_label: Farm
---

A Farm é o componente principal do sistema e representa uma fazenda real, possuindo latitude e longitude e uma lista de Peripherals.

Campo        | Tipo          | Descrição
------------ | ------------- | -------------
_id          | String        | Representa o ID no sistema
userId       | Integer       | Representa o ID do usuário
latitude     | Decimal       | Representa a latitude geográfica
longitude    | Decimal       | Representa a longitude geográfica

## Index

Listar todos os objetos Farm vinculados a sua conta.

```JSON
GET https://www.lit.com/api/farm
```

#### Examplo de Response
```JSON
[
  {
    "_id": "5f022a7d3fa7fa3eea9a16fa",
    "latitude": -6.0458346,
    "longitude": -3123.0292978
  }
]
```
## Show

Listar apenas um objeto Farm.

```JSON
GET https://www.lit.com/api/farm/id:int
```

#### Examplo de Response
```JSON
{
  "_id": "5f022a7d3fa7fa3eea9a16fa",
  "latitude": -6.0458346,
  "longitude": -3123.0292978
}
```

------------------

## Store

Criar um objeto Farm.

```JSON
POST https://www.lit.com/api/farm

Body:
{
	"userId": 2,
	"latitude": -6.0458346,
	"longitude": -37.0292978
}
```

#### Examplo de Response
```JSON
{
  "_id": "5f022a7d3fa7fa3eea9a16fa",
  "userId": 2,
  "latitude": -6.0458346,
  "longitude": -37.0292978,
}
```


------------------


## Update

Atualizar um objeto Farm.

```JSON
PUT https://www.lit.com/api/farm/_id:String

Body:
{
	"latitude": -6.0458346,
	"longitude": -3123.0292978
}
```

#### Examplo de Response
```JSON
{
  "_id": "5f022a7d3fa7fa3eea9a16fa",
  "userId": 2,
  "latitude": -6.0458346,
  "longitude": -3123.0292978
}
```

------------------

## Delete

Deletar um objeto Farm.

```JSON
DEL https://www.lit.com/api/farm/_id:String
```

#### Examplo de Response
```JSON
{
  "_id": "5f022532656f4c3bfb815882"
}
```


