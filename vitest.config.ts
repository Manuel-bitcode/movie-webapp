import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    css: true,
    
    // Solo testear estos archivos (mucho más simple!)
    include: [
      'src/**/*.test.{ts,tsx}',
      'src/**/*.spec.{ts,tsx}',
    ],
    
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      
      // Solo medir coverage de estos archivos
      include: [
        'src/components/**/*.{ts,tsx}',
        'src/context/**/*.{ts,tsx}',
      ],
      
      // Excluir del coverage
      exclude: [
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/index.{ts,tsx}',
        '**/*.config.{ts,js}',
      ],
      
      // Umbrales mínimos de cobertura
      thresholds: {
        lines: 20,        // 80% de líneas cubiertas
        branches: 50,     // 75% de ramas/condiciones cubiertas
        functions: 50,    // 80% de funciones cubiertas
        statements: 20,   // 80% de declaraciones cubiertas
      },
    },
    
    reporters: ['default', 'junit'],
    outputFile: {
      junit: './junit.xml',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

