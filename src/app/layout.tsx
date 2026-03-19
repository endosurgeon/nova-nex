import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nova - Next Generation AI',
  description: 'Nova - 下一代AI解决方案',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
