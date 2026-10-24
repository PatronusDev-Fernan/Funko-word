# Funko Store

Funko Store es una aplicación web de comercio electrónico desarrollada como proyecto de portafolio con **React** y **Vite**. La aplicación simula una tienda de figuras Funko y permite explorar productos, consultar novedades, administrar un carrito de compras y completar un flujo de checkout simulado.

> **Nota:** este proyecto es una demostración de portafolio. El proceso de pago es simulado y no realiza cargos reales.

## Funcionalidades

- Catálogo de productos generado a partir de datos locales.
- Sección de productos destacados.
- Secciones de novedades y productos exclusivos.
- Carrito de compras accesible desde cualquier página.
- Agregar y eliminar productos del carrito.
- Modificar la cantidad de cada producto.
- Cálculo automático del número de artículos y del precio total.
- Persistencia del carrito mediante `localStorage`.
- Navegación entre páginas con React Router.
- Checkout simulado con información de envío y método de pago.
- Envío gratuito en compras mayores a $1,000 MXN.
- Confirmación visual al finalizar una compra simulada.
- Diseño responsive mediante CSS.

## Tecnologías

- React 19
- JavaScript
- Vite
- React Router DOM
- Context API
- React Hooks: `useState`, `useEffect` y `useContext`
- HTML5
- CSS3
- Web Storage API (`localStorage`)

## Estructura del proyecto

```text
Funko-word/
├── public/
│   └── Imágenes y recursos públicos
│
├── src/
│   ├── assets/
│   │   └── Recursos visuales
│   │
│   ├── components/
│   │   ├── CartDrawer
│   │   ├── Footer
│   │   ├── Hero
│   │   ├── Navbar
│   │   ├── ProductCard
│   │   └── ProductGrid
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── data/
│   │   └── funkos.js
│   │
│   ├── pages/
│   │   ├── inicio.jsx
│   │   ├── catalogo.jsx
│   │   ├── novedades.jsx
│   │   └── checkout.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

## Instalación

### Requisitos

Necesitas tener instalados:

- Node.js
- npm
- Git

### Clonar el repositorio

```bash
git clone https://github.com/PatronusDev-Fernan/Funko-word.git
```

Entra al proyecto:

```bash
cd Funko-word
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local desde la que puedes abrir la aplicación.

## Demo

La demo pública se añadirá próximamente.

## Capturas

Las capturas de la interfaz se añadirán después de publicar la demo.

## Próximas mejoras

- Publicar una demo accesible desde el navegador.
- Mejorar la organización de los estilos.
- Reducir estilos inline.
- Homogeneizar los nombres de archivos y componentes.
- Añadir capturas de las principales pantallas.

## Autor

**José Fernando Pantoja Onofre**

Desarrollador Frontend & Android Jr.

GitHub: [@PatronusDev-Fernan](https://github.com/PatronusDev-Fernan)