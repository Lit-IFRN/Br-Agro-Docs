---
id: collector-farm
title: Farm
sidebar_label: Farm
---

The Farm is the main component of the system and represents a real farm, having latitude and longitude and a list of Peripherals.

Campo        | Tipo          | Descrição
------------ | ------------- | -------------
_id          | String        | Represents the ID in the system
userId       | Integer       | Represents the user ID
latitude     | Decimal       | Represents geographic latitude
longitude    | Decimal       | Represents geographical longitude

## Index

List all Farm objects.

```JSON
GET https://www.lit.com/api/farm
```

#### Example of Response
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

List only one Farm object.

```JSON
GET https://www.lit.com/api/farm/id:int
```

#### Example of Response
```JSON
{
  "_id": "5f022a7d3fa7fa3eea9a16fa",
  "latitude": -6.0458346,
  "longitude": -3123.0292978
}
```

------------------

## Store

Create a Farm object.

```JSON
POST https://www.lit.com/api/farm

Body:
{
  "userId": 2,
  "latitude": -6.0458346,
  "longitude": -37.0292978
}
```

#### Example of Response
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

Update a Farm object.

```JSON
PUT https://www.lit.com/api/farm/_id:String

Body:
{
  "latitude": -6.0458346,
  "longitude": -3123.0292978
}
```

#### Example of Response
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

Delete a Farm object.

```JSON
DEL https://www.lit.com/api/farm/_id:String
```

#### Example of Response
```JSON
{
  "_id": "5f022532656f4c3bfb815882"
}
```


