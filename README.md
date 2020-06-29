# v202007

## Antecedentes

Recientemente, aplicaciones móviles de mensajería como WhatsApp, han abilitado un canal de comunicación entre negocios y consumidores que presenta un catálogo de nuevas oportunidades para desarrollar herramientas que agilicen esta nueva dinámica de las operaciones de compra-venta.

## Descripción del problema

Esta actualización en la forma en la que los consumidores solicitan productos y servicios a través de mensajería móvil como WhatsApp Business, presenta nuevos retos para los operadores de negocios que aún no han sido resueltos por aplicaciones web o móviles.

Por ejemplo:

### Negocio de Hamburguesas

María opera un negocio de hamburguesas en una buena zona de la capital. Actualmente envía su catálogo de hamburguesas en formato PDF o JPG a los clientes que lo solicitan. María tiene en la galería de su celular el catálogo y a veces recuerda enviar el link al catálogo que WhatsApp Business ofrece dentro de la aplicación.

Cuando el cliente ha elegido lo que desea ordenar, María envía una respuesta pre-determinada parecida a esto:

```
Gracias por comprar nuestras hamburguesas.
Por favor, indica la siguiente información para completar tu orden:

- Nombre de quien recibe
- Productos que ordena
- NIT para factura
- Dirección de entrega
- Medio de pago
```

En algunas ocasiones, a pesar de que este cliente ya había solicitado hamburguesas con anterioridad, María atiende tantas órdenes a través de 1 sólo dispositivo, que se le hace imposible mantener un registro de clientes frecuentes, eliminando así la atención personalizada que podría ofrecer.

Una vez que el cliente responde:

```
- Jorge Pérez
- 1 vegana, 2 papas fritas, 2 refrescos
- 123456 Corporación Sublime, SA
- 5a Av. 19-35, Zona 0
- Efectivo, contraentrega
```

María inicia el siguiente protocolo:

- Ingresa la orden a su cocina, a través del sistema con el que cuente
- Envía manualmente el total de la orden al cliente:

```
Hemos recibido tu orden.
El total es de Q259.00, a contra-entrega

Tu pedido llegará a tu puerta alrededor de las 12:30
Que disfrutes tu hamburguesa!
```

- Hace _forward_ de la información a un mensajero
- Está pendiente de que el pedido se entregue
- Envía la factura como screenshot

Falta mencionar los casos en donde el cliente exige su entrega a tiempo. O actualización de las órdenes por modificaciones previas a la entrega.

En ocasiones, María ha enviado órdenes incompletas o equivocadas.

## Descripción de la Solución

Así como María, cientos de otros operadores de negocios se encuentran en la misma situación, intentando adaptarse a la alta demanda de sus productos y servicios por servicios de mensajería, llegando a un límite de su eficiencia y control.

...
Para poder evitar los errores humanos debido a la sobre carga de información, la solución puede encontrarse en la automatización de ciertos procesos.

Escuche de un video de Mark Zuckerberg que se implementarían nuevas funciones para la venta, análisis, datos cruzados, y trato especial de clientes estrella entre sus plataformas Facebook, Instagram, y Whatsapp. Pero revisando la documentación aun no esta disponible.

### Parte 1 – Tomar la Orden
Así que iniciando con el primer contacto del cliente, debe de haber un sistema de chat automatizado. Que puede ayudar de las siguientes dos opciones:

#### Opción 1 – Chat bot robusto
El cliente obtiene una respuesta inmediata. Que puede ser para mostrar el catalogo/menu mientras que un humano interactuá con ellos. Y con un entrenamiento mas sofisticado el chat bot, puede tener reaciones distintas antes los clientes frecuentes, y los nuevos. Ademas de poder pedir su orden, y responder con su total.

#### Opción 2 – Utilizar plataforma
Al evitar el desarrollo de un chat bot robusto, tener un sistema que responde con un saludo, e instrucciones para seguir un link; en donde el cliente se registre, tome su propia orden, vea su total y realice su check out. 

### Parte 2 – Cocina y Envíos
Al recibir la orden del bot o de la plataforma, distribuirla tanto a la cocina para prepararla, y a el mensajero para prepararse para el viaje. 

#### Opción 1 – Chat bot robusto
Podría ser por POST en whatsapp con un chatbot que reconoce comandos como: Orden Lista, Envió en camino, Entregado. 
**Orden Lista** enviaría un mensaje al mensajero para que tome el pedido y lo entregue a la dirección. Ademas de preparar la siguiente orden cronológico para le cocinero.
**Orden en camino** comparte la locación en tiempo real con el cliente del mensajero. (Aquí evitaría también enviarla a cocina, para no sobre cargarlos de información. Al menos que haya una forma de filtrarla)
**Entregado** que activa el envió de la factura en linea del cliente, ademas de permitir la asignación del siguiente orden al mensajero.

#### Opción 2 – Utilizar plataforma
Utilizar una plataforma personalizada para cada uno (cocina, y mensajero). Que ayuda a la cocina observar desde un dashboard las ordenes entrantes, y el estado de la enviadas. 
La plataforma del mensajero tendría la orden, la dirección, y estaría obteniendo la locación en tiempo real del mensajero, para informar al cliente en todo momento.


## Tecnologías

...
Para realizar mensajería automatizada exiten dos formas:
- Utilizar Twilio > Se puede exportar a cualquier lenguaje. (Necesita un servidor)
- Utilizar WhatsApp Business API > Webhook > Que utilizar Express (Necesita un servidor)

HTML requests


## Tiempo de entrega

...
No lo se, nunca he hecho un proyecto asi

## Presupuesto

...
Twilio API for WhatsApp Starting at $0.0042 to send a WhatsApp Template message and $0.005 for WhatsApp Session messages. 
