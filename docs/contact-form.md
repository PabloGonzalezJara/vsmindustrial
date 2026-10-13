# Formulario de contacto

El formulario estático de `/contacto/` envía consultas a Formspree mediante un POST nativo. No necesita un servidor propio, JavaScript de envío ni variables `.env`; un script pequeño y local a esta página solo ajusta la posición inicial de entrada.

## Preparar Formspree

Antes de esperar entregas reales, completa estos pasos en la cuenta de Formspree:

1. En la [cuenta de Formspree](https://formspree.io/), verifica el correo asociado y confirma el destinatario de los mensajes.
2. En el formulario correspondiente al endpoint `https://formspree.io/f/mgaokzpg`, configura una acción **Email** hacia el destinatario verificado.
3. Habilita CAPTCHA para el formulario.

No se han cambiado ajustes de cuenta desde el repositorio. El formulario incluye el campo trampa `_gotcha`; no contiene archivos ni intercepta el envío.

## Qué verá la persona que envía

El navegador valida los campos requeridos y el formato del correo. Al enviar, el navegador continúa en Formspree; allí se completa cualquier verificación solicitada y se muestra el resultado del envío. El sitio no presenta un mensaje local de éxito ni procesa los datos por su cuenta.

El aviso junto al botón explica el propósito de los datos y que Formspree procesa el envío fuera de este sitio. No se afirma que una consulta haya sido entregada antes de que Formspree muestre su resultado.

## Entrada y navegación

Al abrir `/contacto/` directamente o llegar mediante un enlace normal sin fragmento, la página sitúa el formulario bajo el encabezado. El margen de desplazamiento reserva espacio para el encabezado fijo. Un fragmento explícito (por ejemplo, `#contact-form`) conserva el comportamiento nativo del navegador; las navegaciones atrás/adelante y las restauraciones desde BFCache no reinician la posición. No se enfoca ningún campo automáticamente ni se abre el teclado móvil.

El JavaScript de la página solo gestiona esta posición inicial. El formulario sigue enviándose con el POST nativo a Formspree y funciona sin JavaScript; no hay AJAX ni interceptación del resultado.

## Comprobaciones locales

Ejecuta en este orden para que la prueba lea el HTML generado recientemente:

```bash
pnpm build
node --test tests/contact-form.test.mjs
pnpm check
```

La prueba usa `node:test` y verifica el HTML de `dist/contacto/index.html`; no requiere paquetes adicionales ni envía solicitudes al endpoint.

## Verificación de entrega pendiente

La configuración del destinatario, la acción Email y CAPTCHA aún requieren confirmación en la cuenta. La compilación y las pruebas estructurales no demuestran la entrega de un correo ni la experiencia real en navegador. Tras completar la configuración, queda pendiente una prueba manual de navegador y recepción, que debe hacerse solo cuando el responsable autorice un envío real.
