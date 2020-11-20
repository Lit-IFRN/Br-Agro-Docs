---
id: collector-peripheral
title: Peripheral
sidebar_label: Peripheral
---

Peripheral is a component that belongs to a Farm, and contains several Sensors.


Campo        | Tipo          | Descrição
------------ | ------------- | -------------
_id          | String        | Represents the ID in the system
id           | Integer       | Represents the ID in SmartFarm ©
activity     | Integer       | Represents activity value




## Index

List all Peripheral objects.

```JSON
GET https://www.lit.com/api/peripherals
```

#### Example of Response
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

List only one Peripheral object.

```JSON
GET https://www.lit.com/api/peripherals/id:int
```

#### Example of Response
```JSON
{
  "_id": "5f022b4d3fa7fa3eea9a16fc",
  "id": 1,
  "activity": 10
}
```
---

## Store

Create a Peripheral object.

```JSON
POST https://www.lit.com/api/peripherals

Body:
{
  "id": 1,
  "activity": 1
}
```

#### Example of Response
```JSON
{
  "_id": "5f022b4d3fa7fa3eea9a16fc",
  "id": 1,
  "activity": 1
}
```


---

## Update

Update a Peripheral object.

```JSON
PUT https://www.lit.com/api/peripherals/id:int

Body:
{
  "id": 1,
  "activity": 2
}
```

#### Example of Response
```JSON
{
  "_id": "5f022b4d3fa7fa3eea9a16fc",
  "id": 1,
  "activity": 2
}
```

---

## Delete

Delete a Peripheral object.

```JSON
DEL https://www.lit.com/api/peripherals/id:int
```

#### Example of Response
```JSON
{
  "id": 1,
}
```



