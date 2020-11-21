---
id: collector-peripheral
title: Peripheral
sidebar_label: Peripheral
---

O Peripheral é um componente que pertence a uma Farm, e contém vários Sensors.


Campo        | Tipo          | Descrição
------------ | ------------- | -------------
_id          | String        | Representa o ID no sistema
id           | Integer       | Representa o ID no SmartFarm ©
activity     | Integer       | Representa o valor de atividade




## Index

Listar todos os objetos Peripheral.

```JSON
GET https://www.lit.com/api/peripherals
```

#### Exemplo de Response
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

#### Exemplo de Response
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

#### Exemplo de Response
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
  "id": 1,
  "activity": 2
}
```

#### Exemplo de Response
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

#### Exemplo de Response
```JSON
{
  "id": 1,
}
```



