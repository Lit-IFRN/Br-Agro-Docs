---
id: central-examples
title: Central Examples
sidebar_label: Central Examples
---


## Criando uma instância
```c
CentralCommunication central = new CentralCommunication(0x00,0x01,0xBB);


```
Texto explicação



## Configurando um periférico
```c

central.configurePeripheral(id, model);

```
Texto explicação



## Iniciando comunicação com dispositivo Lora
```c
central.startLora(m0,m1,rx,tx,aux);

```
Texto explicação



## Registrando um periférico
```c
central.registerPeripheral();
```
Texto explicação


## Verificando se existem mensagens
```c
while(central.hasMessage()){

}

```
Texto explicação

## Lendo a mensagem que foi enviada
```c
central.readMessage();
```
Texto explicação

## Enviando uma mensagem de ação
```c
central.sendActionMessage(0x00,0x01);
```
Texto explicação

## sendMeasurementMessage()
```c
central.sendMeasurementMessage(0x00,0x01);
```
Texto explicação
