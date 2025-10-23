# 🎬 Movie WebApp

Una aplicación web moderna para descubrir y valorar películas. Los usuarios pueden explorar un catálogo de películas y dar "like" a sus favoritas, con un contador global que muestra la popularidad de cada película en tiempo real.

## ✨ Características

- 🎥 **Catálogo de Películas**: Explora una amplia colección de películas con información detallada
- ❤️ **Sistema de Likes**: Dale like a tus películas favoritas con un simple clic
- 📊 **Contador Global**: Visualiza cuántas personas han dado like a cada película

## 🚀 Tecnologías

- [Next.js 15](https://nextjs.org/) - Framework de React para producción
- [React 19](https://react.dev/) - Biblioteca de UI
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utility-first
- [Turbopack](https://turbo.build/pack) - Compilador rápido para desarrollo

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm, yarn, pnpm o bun

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Manuel-bitcode/movie-webapp.git
cd movie-webapp
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
movie-webapp/
├── src/
│   └── app/
│       ├── movies/         # Páginas y componentes de películas
│       ├── layout.tsx      # Layout principal
│       ├── page.tsx        # Página de inicio
│       └── globals.css     # Estilos globales
├── public/                 # Archivos estáticos
├── package.json
└── README.md
```

## 🎯 Funcionalidades Principales

### Sistema de Likes

Cada película tiene un botón de like que permite a los usuarios mostrar su aprecio por sus películas favoritas. El contador se actualiza en tiempo real mostrando el número total de likes que ha recibido cada película.

### Contador Global

El contador global muestra estadísticas en tiempo real de las películas más populares basándose en el número de likes que han recibido de todos los usuarios.

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm start            # Inicia el servidor de producción

# Linting
npm run lint         # Ejecuta el linter de código
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Manuel** - [GitHub](https://github.com/Manuel-bitcode)

## 🙏 Agradecimientos

- API de películas: [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Iconos y diseño inspirados en las mejores prácticas de UX/UI
- Comunidad de Next.js por su excelente documentación

---

⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub!
