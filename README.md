# v202007

## Antecedentes

Recientemente, aplicaciones móviles de mensajería como WhatsApp, han habilitado un canal de comunicación entre negocios y consumidores que presenta un catálogo de nuevas oportunidades para desarrollar herramientas que agilicen esta nueva dinámica de las operaciones de compra-venta.

## Descripción del problema

Esta actualización en la forma en la que los consumidores solicitan productos y servicios a través de mensajería móvil como WhatsApp Business, presenta nuevos retos para los operadores de negocios que aún no han sido resueltos por aplicaciones web o móviles.

Por ejemplo:

### Negocio de Hamburguesas

María opera un negocio de hamburguesas en una buena zona de la capital. Actualmente envía su catálogo de hamburguesas en formato PDF o JPG a los clientes que lo solicitan. María tiene en la galería de su celular el catálogo y a veces recuerda enviar el link al catálogo que WhatsApp Business ofrece dentro de la aplicación.

Cuando el cliente ha elegido lo que desea ordenar, María envía una respuesta predeterminada parecida a esto:

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
- Efectivo, contra entrega
```

María inicia el siguiente protocolo:

- Ingresa la orden a su cocina, a través del sistema con el que cuente
- Envía manualmente el total de la orden al cliente:

```
Hemos recibido tu orden.
El total es de Q259.00, a contra entrega

Tu pedido llegará a tu puerta alrededor de las 12:30
Que disfrutes tu hamburguesa!
```

- Hace _forward_ de la información a un mensajero
- Está pendiente de que el pedido se entregue
- Envía la factura como screenshot

Falta mencionar los casos en donde el cliente exige su entrega a tiempo. O actualización de las órdenes por modificaciones previas a la entrega.

En ocasiones, María ha enviado órdenes incompletas o equivocadas.

## Descripción de la Solución

Así como María, cientos de otros operadores de negocios se encuentran en la misma situación, intentando adaptarse a la alta demanda de sus productos y servicios por canales de mensajería, llegando a un límite de su eficiencia y control.

### Glosario de términos

#### Usuario Final

Persona que administra el catálogo de productos, crea órdenes de compra y se comunica con sus clientes.

#### Emisor

Inicia una conversación con el Usuario Final a través de Whatsapp for Business

### Propuesta

#### Creación y actualización de órdenes de compra

María, de ahora en adelante: el _usuario_; tendrá acceso a una aplicación móvil que le permita generar y actualizar órdenes de compra de manera inmediata, sólo con el dedo pulgar.

##### Órdenes de compra con suscripción y selección de días de entrega

El usuario y el cliente podrán seleccionar opciones de día y hora de entrega asignados por el usuario.

##### Notificaciones de órdenes de compra

El sistema notificará al usuario de nuevas órdenes de compra o de actualización del estatus de dichas órdenes.

#### Envío de mensajes via whatsapp con formato de recibo / nota de venta

La mayor ventaja de esta plataforma es que al crear una orden de compra, el usuario podrá enviar mensajes directamente por whatsapp con formato de recibo, con el precio unitario de cada artículo, la cantidad, el subtotal, los impuestos, costos de envío, descuentos y gran total.

#### Gestión de inventario

El usuario tendrá control de su inventario y el sistema descontará automáticamente las unidades de inventario consumidas.

#### Catálogo y compra en línea

Los clientes del usuario podrán ver los productos en un link https con el dominio de la empresa del usuario.

Aunque este sistema, permite que el usuario genere las órdenes de compra sin que el cliente deba salir de whatsapp, es opcional para el cliente comprar a través del catálogo y el proceso de checkout.

#### Gestión automática de nuevos clientes y clientes frecuentes

Una característica innovadora de este sistema es que el usuario tendrá acceso a una lista de contactos ligados a su historial de compra. Lo que permitará al usuario conocer de antemano sus direcciones de entrega y sus datos personales.

## Tecnologías

El sistema anterior requiere de la siguiente arquitectura:

### API / Backend

- Wordpress con Woocommerce plugin con JSON API Activado: https://woocommerce.github.io/woocommerce-rest-api-docs/
- Twilio whatsapp api (sandbox), requiere aprobación del negocio: https://www.twilio.com/docs/whatsapp/api#sending-notifications
- Express server sobre Node JS v12.16.0 o superior

### Mobile App / Cliente frontend 1

- React Native / Expo con expo-push-notifications: https://docs.expo.io/guides/push-notifications/

### Web App / Cliente frontend 2

- Wordpress con Woocommerce plugin

### Base de datos

- MySQL

### Infraestructura

- LAMP Stack en AWS ECS containers

## Tiempo de entrega

3 meses a partir de la fecha del anticipo (50%), más 1 mes de correciones y mantenimiento.
Los cambios posteriores a este periodo incurren en costos adicionales.

## Equipo de desarollo

- 1 equipo de API / Backend (Woocommerce)
- 1 equipo de API / Backend (twilio whatsapp)
- 1 equipo de App Móvil (react native / expo)
- 1 equipo de App Web (wordpress / woocommerce)

## Presupuesto

USD 32,000

### Costos de infraestructura

USD 500 / mes
