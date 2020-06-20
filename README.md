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
