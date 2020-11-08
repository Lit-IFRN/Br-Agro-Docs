---
id: doc1
title: Latin-ish
sidebar_label: Iniciando
---

Versão português brasileiro.



Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

## Obtendo o Token de acesso

Você pode conseguir um Token de acesso se registrando no site [www.lit.com/register](http://www.lit.com/register). Com esse Token você terá autorização de fazer requisições na nossa API por tempo ilimitado.

>Qualquer um com esse Token pode realizar requisições pelo seu email, não o compartilhe com ninguém.


## Referência da API

### Farm

Listar todos os objetos Farm vinculados a sua conta.

```http
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




