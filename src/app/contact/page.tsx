'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('感谢您的留言！我们会尽快与您联系。')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Nova
          </Link>
          <nav className="flex gap-6">
            {['首页', '关于', '产品', '联系'].map((item) => (
              <Link 
                key={item}
                href={item === '首页' ? '/' : `/${item === '关于' ? 'about' : item === '产品' ? 'products' : 'contact'}`}
                className={`text-gray-600 hover:text-indigo-600 transition-colors ${item === '联系' ? 'text-indigo-600 font-medium' : ''}`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            联系 <span className="text-indigo-600">我们</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            有问题？随时联系我们
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">发送消息</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">留言</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                发送消息
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">联系方式</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    📧
                  </div>
                  <div>
                    <div className="font-medium">邮箱</div>
                    <div className="text-gray-600">contact@nova.ai</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <div className="font-medium">地址</div>
                    <div className="text-gray-600">中国 · 上海</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div>
                    <div className="font-medium">工作时间</div>
                    <div className="text-gray-600">周一至周五 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">加入我们</h3>
              <p className="text-indigo-100 mb-4">
                我们正在寻找志同道合的伙伴，一起探索 AI 的无限可能。
              </p>
              <a 
                href="mailto:career@nova.ai"
                className="inline-block px-6 py-2 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors"
              >
                查看职位
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Nova. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
