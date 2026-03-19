'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: '首页', href: '/' },
  { name: '关于', href: '/about' },
  { name: '产品', href: '/products' },
  { name: '联系', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Nova
        </Link>
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`text-gray-600 hover:text-indigo-600 transition-colors ${
                pathname === item.href ? 'text-indigo-600 font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
