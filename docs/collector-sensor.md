---
id: collector-sensor
title: Sensor
sidebar_label: Sensor
---

The Sensor is a component that belongs to a Peripheral, and contains several Measurements.

Campo        | Tipo          | Descrição
------------ | ------------- | -------------
_id          | String        | Represents the ID in the system
id           | Integer       | Represents the ID in SmartFarm ©
sensorType   | Integer       | Represents the sensor type

## Index

List all Farm objects linked to your account.

```JSON
GET https://www.lit.com/api/sensors
```

#### Example of Response
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

List only one Farm object.

```JSON
GET https://www.lit.com/api/sensors/id:int
```

#### Example of Response
```JSON
{
  "_id": "5f022bfa3fa7fa3eea9a16fd",
  "id": 3,
  "sensorType": 1,
}
```

------------------

## Store

Create a Farm object.

```JSON
POST https://www.lit.com/api/sensors

Body:
{
  "peripheralId": 1,
  "id": 3,
  "sensorType": 1
}
```

#### Example of Response
```JSON
{
  "_id": "5f022bfa3fa7fa3eea9a16fd",
  "id": 3,
  "sensorType": 1,
}
```


------------------


## Update

Update a Farm object.

```JSON
PUT https://www.lit.com/api/sensors/id:int

Body:
{
  "id": 3,
  "sensorType": 1
}
```

#### Example of Response
```JSON
{
  "_id": "5f022bfa3fa7fa3eea9a16fd",
  "id": 3,
  "sensorType": 1,
}
```

------------------

## Delete

Delete a Farm object.

```JSON
DEL https://www.lit.com/api/sensors/id:int
```

#### Example of Response
```JSON
{
  "id": "1"
}
```


