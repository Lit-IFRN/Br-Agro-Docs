---
id: collector-sensor
title: Sensor
sidebar_label: Sensor
---

O Sensor é um componente que pertence a um Peripheral, e contém várias Measurements.

Campo        | Tipo          | Descrição
------------ | ------------- | -------------
_id          | String        | Representa o ID no sistema
id           | Integer       | Representa o ID no SmartFarm ©
sensorType   | Integer       | Representa o tipo do sensor

## Index

Listar todos os objetos Farm vinculados a sua conta.

```JSON
GET https://www.lit.com/api/sensors
```

#### Exemplo de Response
```JSON
[
  {
    "_id": "5f022bfa3fa7fa3eea9a16fd",
    "id": 3,
    "sensorType": 1,
  }
]
```
## Show

Listar apenas um objeto Farm.

```JSON
GET https://www.lit.com/api/sensors/id:int
```

#### Exemplo de Response
```JSON
{
  "_id": "5f022bfa3fa7fa3eea9a16fd",
  "id": 3,
  "sensorType": 1,
}
```

------------------

## Store

Criar um objeto Farm.

```JSON
POST https://www.lit.com/api/sensors

Body:
{
  "peripheralId": 1,
  "id": 3,
  "sensorType": 1
}
```

#### Exemplo de Response
```JSON
{
  "_id": "5f022bfa3fa7fa3eea9a16fd",
  "id": 3,
  "sensorType": 1,
}
```


------------------


## Update

Atualizar um objeto Farm.

```JSON
PUT https://www.lit.com/api/sensors/id:int

Body:
{
  "id": 3,
  "sensorType": 1
}
```

#### Exemplo de Response
```JSON
{
  "_id": "5f022bfa3fa7fa3eea9a16fd",
  "id": 3,
  "sensorType": 1,
}
```

------------------

## Delete

Deletar um objeto Farm.

```JSON
DEL https://www.lit.com/api/sensors/id:int
```

#### Exemplo de Response
```JSON
{
  "id": "1"
}
```


