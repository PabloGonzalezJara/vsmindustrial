# AGENTS.md

## Objetivo del proyecto

Construir un sitio web corporativo estático, rápido, responsivo y fácil de mantener, para vsm industrial, necesito que uses como referencia: https://grupovsm.cl/vsm-industrial/ , https://grupovsm.cl/vsm-industrial/quienes-somos/ , https://grupovsm.cl/vsm-industrial/productos/ y https://grupovsm.cl/vsm-industrial/contacto/

Las rutas iniciales del sitio serán:

- `/`
- `/quienes-somos`
- `/productos`
- `/contacto`

El sitio tendrá contenido informativo y un catálogo simple de productos. No se requiere carrito de compras, autenticación, base de datos, panel administrativo ni precios dinámicos.

## Tecnologías obligatorias

- **Astro** como framework principal.
- **Tailwind CSS** para estilos y diseño responsivo.
- **TypeScript** para datos, utilidades y lógica auxiliar.
- **pnpm** como gestor de paquetes.
- **Cloudflare Pages** para compilación, despliegue y alojamiento.
- **GitHub** como repositorio de código y origen de los despliegues.

## Tipo de aplicación

El proyecto debe generarse como un sitio completamente estático.

No se debe incorporar renderizado en servidor, API, base de datos o funciones dinámicas mientras no exista un requerimiento explícito que lo justifique.

Se debe evitar agregar React, Vue, Svelte u otro framework de interfaz. Los componentes deben desarrollarse con Astro, salvo que una funcionalidad interactiva futura requiera expresamente otra tecnología.

## Reglas de desarrollo

- Utilizar componentes reutilizables para encabezado, navegación, pie de página, botones, tarjetas y elementos compartidos.
- Mantener las páginas simples y dividir las secciones extensas en componentes.
- Utilizar HTML semántico y accesible.
- Implementar el diseño siguiendo un enfoque mobile-first.
- Evitar JavaScript del lado del cliente cuando no sea necesario.
- Evitar dependencias que no aporten una funcionalidad indispensable.
- No duplicar contenido, estilos ni componentes.
- Utilizar nombres de carpetas, componentes, variables y rutas claros y consistentes.
- Utilizar `kebab-case` para carpetas, rutas e imágenes.
- Utilizar Tailwind CSS como sistema principal de estilos.
- Reservar los estilos globales para reglas generales, variables y configuraciones que no puedan expresarse adecuadamente con Tailwind.
- No utilizar estilos inline.
- Mantener el contenido de productos separado de su presentación visual.
- Todos los enlaces internos deben utilizar rutas relativas al sitio.
- Todos los enlaces externos deben abrirse de forma segura cuando corresponda.

## Rutas

Las páginas deben organizarse dentro de `src/pages`.

La estructura debe generar las siguientes rutas:

- La página principal en `/`.
- La presentación de la empresa en `/quienes-somos`.
- El catálogo informativo en `/productos`.
- La información y medios de contacto en `/contacto`.

Cada ruta debe compartir el mismo layout general, encabezado, navegación y pie de página.

## Imágenes

- Todas las imágenes rasterizadas del proyecto deben utilizar formato **WebP**.
- No agregar imágenes JPG, JPEG o PNG, salvo que exista una restricción técnica debidamente justificada.
- Utilizar nombres descriptivos en `kebab-case`.
- Organizar las imágenes según la página o sección donde se utilizan.
- Definir texto alternativo descriptivo en todas las imágenes que aporten información.
- Las imágenes decorativas deben tener texto alternativo vacío.
- Evitar imágenes con dimensiones o peso superiores a lo necesario.
- Definir ancho y alto para evitar movimientos del contenido durante la carga.
- Aplicar carga diferida a imágenes que no aparezcan inicialmente en pantalla.
- No incrustar imágenes como Base64 dentro del código.
- No enlazar imágenes esenciales desde servicios externos.

## Productos

Los productos serán informativos y sus datos estarán almacenados localmente dentro del proyecto.

Cada producto podrá contener:

- Nombre.
- Descripción.
- Imagen WebP.
- Categoría.
- Características principales.
- Enlace o medio de contacto opcional.

No se debe implementar inventario, carrito, pagos, precios dinámicos ni administración de productos sin un nuevo requerimiento.

## Contacto

La página de contacto podrá incluir:

- Teléfono.
- Correo electrónico.
- Dirección.
- Horarios de atención.
- Enlace a WhatsApp.
- Redes sociales.
- Mapa o enlace de ubicación.

Se debe priorizar el contacto mediante enlaces directos. Un formulario solo debe implementarse cuando se defina explícitamente el servicio que recibirá y procesará los mensajes.

## Despliegue

El proyecto será publicado en **Cloudflare Pages**.

El despliegue debe realizarse desde el repositorio de GitHub. Cada cambio integrado en la rama de producción debe generar una nueva compilación y publicación.

La salida del proyecto debe ser estática y compatible con Cloudflare Pages.

No se debe desplegar este sitio mediante VPS, Docker, Dokploy o un servidor Node.js mientras siga siendo un proyecto completamente estático.

## Estructura de carpetas

La siguiente estructura muestra únicamente carpetas:

```text
/
├── public/
│   ├── fonts/
│   └── images/
│       ├── branding/
│       ├── contacto/
│       ├── home/
│       ├── productos/
│       └── quienes-somos/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   │   ├── contacto/
│   │   │   ├── home/
│   │   │   ├── productos/
│   │   │   └── quienes-somos/
│   │   └── ui/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   ├── contacto/
│   │   ├── productos/
│   │   └── quienes-somos/
│   ├── styles/
│   ├── types/
│   └── utils/
└── docs/
```

## Criterios de calidad

Antes de considerar terminada una modificación se debe comprobar:

- Que la compilación finalice correctamente.
- Que todas las rutas funcionen.
- Que el sitio sea usable en dispositivos móviles y escritorio.
- Que no existan enlaces ni imágenes rotas.
- Que las imágenes rasterizadas estén en formato WebP.
- Que no se haya incorporado JavaScript innecesario.
- Que no existan componentes o estilos duplicados.
- Que los textos, títulos y metadatos básicos sean coherentes.
- Que el resultado pueda desplegarse correctamente en Cloudflare Pages.
