pipeline {
    agent any

    parameters {
        string(name: 'BRANCH', defaultValue: 'main', description: 'Rama a construir')
    }

    environment {
        
        // Configuración del proyecto
        NODE_VERSION = '20'
        APP_PORT = '3002'
    }

    stages {
        stage('✅ Verificar Herramientas') {
            steps {
                echo '🔧 Verificando herramientas disponibles...'
                sh '''
                    echo "Node.js version:"
                    node --version
                    echo "npm version:"
                    npm --version
                '''
            }
        }

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
                echo '🧪 Ejecutando tests unitarios con cobertura...'
                dir('/workspace/movie-webapp') {
                    sh 'npm run test:ci'
                }
            }
            post {
                always {
                    echo '📊 Publicando reportes de tests...'
                    dir('/workspace/movie-webapp') {
                        // Publicar resultados JUnit
                        junit 'junit.xml'
                        
                        // Publicar reporte de cobertura HTML
                        publishHTML([
                            reportDir: 'coverage/lcov-report',
                            reportFiles: 'index.html',
                            reportName: 'Coverage Report',
                            keepAll: true
                        ])
                    }
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

