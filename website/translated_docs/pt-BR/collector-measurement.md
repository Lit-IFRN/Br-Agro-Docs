---
id: collector-measurement
title: Measurement
sidebar_label: Measurement
---

A Measurement é a leitura de um sensor.


Campo        | Tipo          | Descrição
------------ | ------------- | -------------
_id          | String        | Representa o ID no sistema
id           | Integer       | Representa o ID no SmartFarm ©
value        | Integer       | Representa o valor da leitura
date         | String        | Representa a data em que a leitura foi feita


## Index

Listar todos os objetos Measurement.

```JSON
GET https://www.lit.com/api/measurements
```

#### Examplo de Response
```JSON
[
  {
    "_id": "5f022c653fa7fa3eea9a16ff",
    "id": 2,
    "value": 1212333,
    "date": "12/12/2020",
  }
]
```
---

## Show

Listar apenas um objeto Measurement.

```JSON
GET https://www.lit.com/api/measurements/id:int
```

#### Examplo de Response
```JSON
{
  "_id": "5f022c043fa7fa3eea9a16fe",
  "id": 2,
  "value": 12,
  "date": "12/12/2020",
}
```
---

## Store

Criar um objeto Measurement.

```JSON
POST https://www.lit.com/api/measurements

Body:
{
  "peripheralId": 1,
  "sensorId": 3,
  "id": 2,
  "value": 12,
  "date": "12/12/2020"
}
```

#### Examplo de Response
```JSON
{
  "_id": "5f022c653fa7fa3eea9a16ff",
  "id": 2,
  "value": 12,
  "date": "12/12/2020",
}
```


---

## Update

Atualizar um objeto Measurement.

```JSON
PUT https://www.lit.com/api/measurements/id:int

Body:
{
  "id": 2,
  "value": 1,
  "date": "12/12/2020"
}
```

#### Examplo de Response
```JSON
{
  "_id": "5f022c653fa7fa3eea9a16ff",
  "id": 2,
  "value": 1,
  "date": "12/12/2020"
}
```

---

## Delete

Deletar um objeto Measurement.

```JSON
DEL https://www.lit.com/api/measurements/id:int
```

#### Examplo de Response
```JSON
{
  "id": "2"
}
```



