pipeline {
    agent any
    tools { nodejs 'Node20' }

    parameters {
        string(name: 'BRANCH', defaultValue: 'main', description: 'Rama a construir')
    }

    environment {
        // Configuración de Docker Hub (cámbialo por tus datos)
        DOCKERHUB_USER = 'tu_usuario_dockerhub'
        DOCKERHUB_REPO = 'movie-webapp'
        DOCKERHUB_CREDENTIALS_ID = 'dockerhub-credentials'
        
        // Configuración del proyecto
        NODE_VERSION = '20'
        APP_PORT = '3002'
    }

    stages {
        stage('🔍 Checkout') {
            steps {
                echo '📥 Descargando código del repositorio...'
                // Si usas Git, descomenta la siguiente línea:
                // checkout scm
                
                // Como tienes el código montado localmente:
                echo '✅ Código disponible en /workspace/movie-webapp'
            }
        }

        stage('📦 Instalar Dependencias') {
            steps {
                echo '📦 Instalando dependencias de Node.js...'
                dir('/workspace/movie-webapp') {
                    sh 'npm install'
                }
            }
        }

        stage('🔎 Lint (Revisar código)') {
            steps {
                echo '🔍 Analizando código con ESLint...'
                dir('/workspace/movie-webapp') {
                    // ESLint puede fallar, pero no detiene el pipeline
                    sh 'npm run lint || echo "⚠️  Lint encontró advertencias"'
                }
            }
        }

        stage('🧪 Tests con Vitest') {
            steps {
                echo '🧪 Ejecutando tests unitarios...'
                dir('/workspace/movie-webapp') {
                    sh 'npm test'
                }
            }
        }

        stage('📊 Cobertura de Código') {
            steps {
                echo '📊 Generando reporte de cobertura...'
                dir('/workspace/movie-webapp') {
                    sh 'npm run test:coverage'
                }
            }
        }

        stage('🏗️  Build Next.js') {
            steps {
                echo '🏗️  Compilando aplicación Next.js...'
                dir('/workspace/movie-webapp') {
                    sh 'npm run build'
                }
            }
        }

        // stage('📤 Push to Docker Hub') {
        //     when {
        //         branch 'main'
        //     }
        //     steps {
        //         echo '📤 Subiendo imagen a Docker Hub...'
        //         script {
        //             withCredentials([usernamePassword(
        //                 credentialsId: DOCKERHUB_CREDENTIALS_ID,
        //                 usernameVariable: 'DOCKER_USER',
        //                 passwordVariable: 'DOCKER_PASS'
        //             )]) {
        //                 sh """
        //                     echo "\$DOCKER_PASS" | docker login -u "\$DOCKER_USER" --password-stdin
        //                     docker push ${DOCKERHUB_USER}/${DOCKERHUB_REPO}:${BUILD_NUMBER}
        //                     docker push ${DOCKERHUB_USER}/${DOCKERHUB_REPO}:latest
        //                     docker logout
        //                 """
        //             }
        //         }
        //     }
        // }

        // stage('🧹 Cleanup') {
        //     steps {
        //         echo '🧹 Limpiando recursos...'
        //         // Elimina imágenes antiguas locales
        //         sh 'docker image prune -f || true'
        //     }
        // }
    }

    post {
        always {
            echo '🏁 Pipeline finalizado.'
        }
        success {
            echo '✅ ¡Build exitoso! Todo funcionó correctamente.'
        }
        failure {
            echo '❌ Build falló. Revisa los logs arriba.'
        }
    }
}

