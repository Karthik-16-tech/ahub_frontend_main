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
          // Normalize /admin to /admin/ so Vite SPA serves index.html
          const proxiedPath = url === '/admin' ? '/admin/' : url
          const targetUrl = new URL(proxiedPath, 'http://localhost:5174')

          const proxyReq = http.request(
            targetUrl,
            {
              method: req.method,
              headers: {
                ...req.headers,
                host: 'localhost:5174',
              },
            },
            (proxyRes) => {
              res.writeHead(proxyRes.statusCode || 200, proxyRes.headers)
              proxyRes.pipe(res)
            }
          )

          proxyReq.on('error', (err) => {
            res.writeHead(502, { 'Content-Type': 'text/html' })
            res.end(
              `<div style="font-family:sans-serif;padding:2rem;text-align:center;">` +
              `<h2>AHUB Admin Server Connecting...</h2>` +
              `<p>Please ensure the admin server is running at <code>http://localhost:5174/admin/</code></p>` +
              `<p style="color:#888;">${err.message}</p>` +
              `</div>`
            )
          })

          req.pipe(proxyReq)
          return
        }
        next()
      })

      // Forward WebSocket connections for Vite HMR in /admin
      server.httpServer?.on('upgrade', (req, socket, head) => {
        const url = req.url || ''
        if (url.startsWith('/admin')) {
          const proxySocket = net.connect(5174, 'localhost', () => {
            proxySocket.write(
              `${req.method} ${req.url} HTTP/${req.httpVersion}\r\n` +
              Object.entries(req.headers)
                .map(([k, v]) => `${k}: ${v}`)
                .join('\r\n') +
              '\r\n\r\n'
            )
            proxySocket.write(head)
            socket.pipe(proxySocket)
            proxySocket.pipe(socket)
          })

          proxySocket.on('error', () => {
            socket.destroy()
          })
        }
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
        '/admin': { proxy: 'http://localhost:5174/admin/' },
        '/admin/**': { proxy: 'http://localhost:5174/admin/**' },
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
