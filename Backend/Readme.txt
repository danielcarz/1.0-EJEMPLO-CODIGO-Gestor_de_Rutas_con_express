# 1.0- Gestor de rutas con express

## Descripción

Este es un proyecto básico que demuestra cómo crear un gestor de rutas usando Node.js y Express. La aplicación incluye dos rutas sencillas y utiliza nodemon para la actualización automática durante el desarrollo.

## Características

- Gestión de rutas con Express.
- Dos rutas básicas predefinidas.
- Configuración sencilla de entorno con dotenv.
- Registro de solicitudes HTTP con Morgan (en modo desarrollo).

## Requisitos previos

- [Node.js](https://nodejs.org/) v16.4.5 o superior.
- [NPM](https://www.npmjs.com/) instalado.



## Dependencias

- **express**: Un framework web minimalista para Node.js.
- **dotenv**: Para manejar variables de entorno.
- **morgan**: Middleware para el registro de peticiones HTTP (solo en desarrollo).
- **nodemon**: Reinicia automáticamente el servidor al hacer cambios en el código.



## Estructura del ejercicio

```
.
├── Container
│   ├── Controllers
│   │   └── GenericControllers.js
│   └── Routes
│       └── GenericRoutes.js
├── index.js
```

