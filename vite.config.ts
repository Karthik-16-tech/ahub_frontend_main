import { defineConfig, type Plugin } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import http from 'node:http'
import net from 'node:net'

function adminProxyPlugin(): Plugin {
  return {
    name: 'admin-dev-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || ''
        if (url === '/admin' || url.startsWith('/admin/') || url.startsWith('/admin?')) {
          const adminUrl = process.env.VITE_ADMIN_URL || 'http://13.60.210.151/admin/login'
          res.writeHead(302, { Location: adminUrl })
          res.end()
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    adminProxyPlugin(),
    tsConfigPaths(),
    tanstackStart(),
    nitro({
      routeRules: {
        '/admin': { redirect: 'http://13.60.210.151/admin/login' },
        '/admin/**': { redirect: 'http://13.60.210.151/admin/login' },
      },
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    allowedHosts: true,
  },
  preview: {
    port: 8080,
    strictPort: true,
    host: true,
    allowedHosts: true,
  },
})
