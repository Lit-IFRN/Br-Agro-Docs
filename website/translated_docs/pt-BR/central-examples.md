---
id: central-examples
title: Central Examples
sidebar_label: Central Examples
---

## Métodos essenciais

### Criando uma instância
```c
CentralCommunication central = new CentralCommunication(0x00,0x01,0xBB);
```

Antes de usar a biblioteca, fora do escopo de setup() e loop(), nós precisamos criar uma instância da biblioteca, passando o endereço LORA da central.

### Setup
```c
  void setup(){
    // Configurando o periférico
    central.configurePeripheral(id, model);

    // Iniciando a lora do periférico
    central.startLora(m0,m1,rx,tx,aux);

    // Registrando o periférico na central
    central.registerPeripheral();
  }

```

Dentro do setup é necessário usar esses 3 métodos para o funcionamento da biblioteca.

### Loop
```c
  void loop(){
    if(central.hasMessage()){
      ActionMessage message = central.readMessage();
    }
  }
```

Dentro do loop, é ncessário o uso do método central.hasMessage() pois é nesse método onde o funcionamento da LORA ocorre, caso ele não seja chamado em loop a comunicação com a central será interrompida.

## Outros métodos

### Lendo mensagens da central
```c
void loop(){
    if(central.hasMessage()){
      ActionMessage message = central.readMessage();
    }
  }
```

readMessage() deve ser utilizado para ler uma mensagem da central desde que o método hasMessage retorne true.

### Enviando uma mensagem de ação
```c
central.sendActionMessage(1, 3);
```

### Enviando uma mensagem de leitura

```c
central.sendMeasurementMessage(4.2, 2);
```

## Código de exemplo

```c
#include <CentralCommunication.h>

#define M0_PIN 4
#define M1_PIN 5
#define RX_PIN 6
#define TX_PIN 7
#define AUX 8

#define ID 108
#define MODEL 122

#define EXAMPLE_COMPONENT_IDENTIFIER 3
#define ACTION_TURN_OFF 2

#define EXAMPLE_SENSOR_IDENTIFIER 5

CentralCommunication central(0xAA, 0xBB, 0x04);

bool needsToSendActionMessage = false;
bool needsToSendMeasurementMessage = false;

void setup() {
  central.configurePeripheral(ID, MODEL);
  central.startLora(M0_PIN, M1_PIN, RX_PIN, TX_PIN, AUX);
  central.registerPeripheral();

}

void loop() {
  if(central.hasMessage()){
    ActionMessage action = central.readMessage();

    // Do peripheral action
  }

  if(needsToSendActionMessage){
    central.sendActionMessage(EXAMPLE_COMPONENT_IDENTIFIER, ACTION_TURN_OFF);
  }

  if(needsToSendMeasurementMessage){
    float value = 2.1;

    central.sendMeasurementMessage(value, EXAMPLE_SENSOR_IDENTIFIER);
  }

}

```
