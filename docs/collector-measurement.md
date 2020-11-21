---
id: collector-measurement
title: Measurement
sidebar_label: Measurement
---

Measurement is the reading of a sensor.


Campo        | Tipo          | Descrição
------------ | ------------- | -------------
_id          | String        | Represents the ID in the system
id           | Integer       | Represents the ID in SmartFarm ©
value        | Integer       | Represents the reading value
date         | String        | Represents the date the reading was taken

## Index

List all Measurement objects.

```JSON
GET https://www.lit.com/api/measurements
```

#### Example of Response
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

List only one Measurement object.

```JSON
GET https://www.lit.com/api/measurements/id:int
```

#### Example of Response
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

Create a Measurement object.

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

#### Example of Response
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

Update a Measurement object.

```JSON
PUT https://www.lit.com/api/measurements/id:int

Body:
{
  "id": 2,
  "value": 1,
  "date": "12/12/2020"
}
```

#### Example of Response
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

Delete a Measurement object.

```JSON
DEL https://www.lit.com/api/measurements/id:int
```

#### Example of Response
```JSON
{
  "id": "2"
}
```



