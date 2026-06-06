import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CE Logistics | Excellence, Delivered',
  description: 'A world-class shipping and logistics experience in a cinematic view.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          const originalError = console.error;
          const originalLog = console.log;
          
          function sendToServer(type, args) {
            fetch('/api/log', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ type, message: args.map(a => {
                try {
                  return typeof a === 'object' ? JSON.stringify(a) : String(a);
                } catch(e) {
                  return String(a);
                }
              }).join(' ') })
            }).catch(() => {});
          }

          console.error = function(...args) {
            originalError.apply(console, args);
            sendToServer('error', args);
          };
          console.log = function(...args) {
            originalLog.apply(console, args);
            sendToServer('log', args);
          };

          window.addEventListener('error', function(event) {
            sendToServer('window-error', [event.message, event.filename, event.lineno]);
          });
        ` }} />
      </head>
      <body className={`${inter.className} bg-white text-slate-700 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
