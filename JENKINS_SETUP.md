# 🚀 Configuración de Jenkins con Node.js

## ¿Qué se ha configurado?

Se ha creado una imagen personalizada de Jenkins que incluye:
- ✅ Node.js 20.x (LTS)
- ✅ npm (gestor de paquetes de Node.js)

## 📋 Pasos para activar la configuración

### 1. Detener los contenedores actuales

```bash
docker compose down
```

### 2. Construir la nueva imagen de Jenkins

```bash
docker compose build jenkins
```

Este comando construirá la imagen personalizada de Jenkins con Node.js instalado.

### 3. Iniciar los contenedores

```bash
docker compose up -d
```

O si quieres ver los logs:

```bash
docker compose up
```

### 4. Verificar que Node.js está disponible en Jenkins

Puedes verificar que Node.js y npm están instalados ejecutando:

```bash
docker exec jenkins-server node --version
docker exec jenkins-server npm --version
```

Deberías ver las versiones de Node.js (v20.x.x) y npm instaladas.

## 🎯 Usar Jenkins

1. **Acceder a Jenkins**: http://localhost:8080/jenkins

2. **Obtener la contraseña inicial** (primera vez):
   ```bash
   docker exec jenkins-server cat /var/jenkins_home/secrets/initialAdminPassword
   ```

3. **Crear un Pipeline**:
   - Ve a "Nueva tarea" (New Item)
   - Selecciona "Pipeline"
   - En la configuración, en la sección "Pipeline":
     - Definition: "Pipeline script from SCM"
     - SCM: None (o Git si lo usas)
     - Script Path: Jenkinsfile
   - O simplemente pega el contenido del Jenkinsfile en "Pipeline script"

## 🔧 Archivos modificados

- `Dockerfile.jenkins` - Nueva imagen personalizada de Jenkins
- `docker-compose.yml` - Actualizado para usar la imagen personalizada
- `Jenkinsfile` - Actualizado para usar Node.js del sistema

## 📝 Notas

- La primera construcción puede tardar varios minutos porque debe descargar Node.js
- Los datos de Jenkins persisten en el volumen `jenkins_home`
- Jenkins tiene acceso al código del proyecto en `/workspace/movie-webapp`
- Si necesitas reinstalar Jenkins completamente:
  ```bash
  docker compose down -v  # Elimina también los volúmenes
  docker compose up --build
  ```

## 🛠️ Comandos npm disponibles en Jenkins

Jenkins puede ejecutar todos los comandos npm definidos en tu `package.json`:

- `npm install` - Instalar dependencias
- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Compilar la aplicación Next.js
- `npm run lint` - Analizar código con ESLint
- `npm test` - Ejecutar tests con Vitest
- `npm run test:watch` - Ejecutar tests en modo watch

El Jenkinsfile está configurado para ejecutar:
1. Verificación de herramientas (Node.js y npm)
2. Instalación de dependencias
3. Análisis de código (lint)
4. Tests unitarios
5. Build de la aplicación

## 🐛 Troubleshooting

### Node.js no se encuentra

Si después de construir la imagen Node.js no está disponible, reconstruye sin caché:

```bash
docker compose build --no-cache jenkins
```
