---
id: collector-peripheral
title: Peripheral
sidebar_label: Peripheral
---

English
Nessa área iremos explicar os atributos de Peripheral.
Nessa área iremos explicar os atributos de Peripheral.
Nessa área iremos explicar os atributos de Peripheral.


## Index

Listar todos os objetos Peripheral.

```JSON
GET https://www.lit.com/api/peripherals
```

#### Examplo de Response
```JSON
[
  {
    "_id": "5f022b4d3fa7fa3eea9a16fc",
    "id": 1,
    "activity": 1
  }
]
```
---

## Show

Listar apenas um objeto Peripheral.

```JSON
GET https://www.lit.com/api/peripherals/id:int
```

#### Examplo de Response
```JSON
{
  "_id": "5f022b4d3fa7fa3eea9a16fc",
  "id": 1,
  "activity": 10
}
```
---

## Store

Criar um objeto Peripheral.

```JSON
POST https://www.lit.com/api/peripherals

Body:
{
  "id": 1,
  "activity": 1
}
```

#### Examplo de Response
```JSON
{
  "_id": "5f022b4d3fa7fa3eea9a16fc",
  "id": 1,
  "activity": 1
}
```


---

## Update

Atualizar um objeto Peripheral.

```JSON
PUT https://www.lit.com/api/peripherals/id:int

Body:
{
  "activity": 2
}
```

#### Examplo de Response
```JSON
{
  "_id": "5f022b4d3fa7fa3eea9a16fc",
  "id": 1,
  "activity": 2
}
```

---

## Delete

Deletar um objeto Peripheral.

```JSON
DEL https://www.lit.com/api/peripherals/id:int
```

#### Examplo de Response
```JSON
{
  "id": 1,
}
```














This is a link to [another document.](doc3.md)
This is a link to an [external page.](http://www.example.com)

