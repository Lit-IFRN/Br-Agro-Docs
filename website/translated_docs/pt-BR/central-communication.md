---
id: central-communication
title: Central Communication
sidebar_label: Central Communication
---


## Construtor
### CentralCommunication()
#### Construtor

Argumento        | Tipo          | Descrição
---------------- | ------------- | -------------
ADDH             | Byte          | Representa o addh da LORA da central
ADDL             | Byte          | Representa o addl da LORA da central
CHANNEL          | Byte          | Representa o channel da LORA da central


Salva o endereço Lora da central para futuras comunicações.

## Métodos
----------------------

### configurePeripheral()
```c
configurePeripheral(id, model);
```

Argumento        | Tipo          | Descrição
---------------- | ------------- | -------------
ID               | Byte          | Representa o ID do periférico
Model            | Byte          | Representa o modelo do periférico

Salva informações do periférico para futuras comunicações.

----------------------

### startLora()
```c
startLora(m0,m1,rx,tx,aux);
```

Argumento        | Tipo          | Descrição
---------------- | ------------- | -------------
M0               | Byte          | Indica o pino M0 da LORA do periférico
M1               | Byte          | Indica o pino M1 da LORA do periférico
RX               | Byte          | Indica o pino RX da LORA do periférico
TX               | Byte          | Indica o pino TX da LORA do periférico
AUX              | Byte          | Indica o pino AUX da LORA do periférico

Salva as informações da LORA para que a comunicação seja possibilitada

----------------------

### registerPeripheral()
```c
registerPeripheral();
```

Envia uma mensagem para a central para registrar o periférico na base de dados caso não esteja registrado.

----------------------

### hasMessage()
```c
hasMessage();
```

Verifica se há alguma mensagem da central para determinado periférico.

**Nota: Essa função deve ser sempre chamada dentro do loop, tendo em vista que ela é responsabilizada por toda a comunicação LORA.**

----------------------

### readMessage()
```
readMessage();
```

Lê a mensagem que a central enviou, retornando um ActionMessage.

Retorno: ActionMessage

----------------------

### sendActionMessage()
```
sendActionMessage(action,component_identifier);
```

Argumento                 | Tipo          | Descrição
------------------------- | ------------- | -------------
Ação                      | Byte          | Indica a ação que foi realizada.
Identificador Componente. | Byte          | Indica o identificador do componente que realizou a ação.

Envia uma ação que foi realizada por um componente para a central.

----------------------

### sendMeasurementMessage()
```c
sendActionMessage(value, sensor_identifier);
```

Argumento                 | Tipo          | Descrição
------------------------- | ------------- | -------------
Valor                     | Byte          | Valor lido pelo sensor
Identificador Sensor      | Byte          | Indica o identificador do sensor que realizou a leitura.

Envia uma leitura que foi medida por um sensor para a central.

----------------------

## Tipos

### Action Message

Atributo                  | Tipo          | Descrição
------------------------- | ------------- | -------------
action                    | Byte          | Indica a ação que foi realizada.
identifier                | Byte          | Indica o identificador do componente que realizou a ação.

## Tipos de ações

### 2 - COMPONENT_OFF

É usada para indicar que um componente deve ser desligado, normalmente enviado pela central ao periférico.

----------------------

### 3 - COMPONENT_ON

É usada para indicar que um componente deve ser ligado, normalmente enviado pela central ao periférico.

----------------------

### 4 - COMPONENT_TURNED_OFF

É usada para indicar que um componente acabou de ser desligado, normalmente enviado pelo periférico a central.

----------------------

### 5 - COMPONENT_TURNED_ON

É usada para indicar que um componente acabou de ser ligado, normalmente enviado pelo periférico a central.
