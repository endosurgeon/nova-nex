'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
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
                className={`text-gray-600 hover:text-indigo-600 transition-colors ${item === '关于' ? 'text-indigo-600 font-medium' : ''}`}
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
            关于 <span className="text-indigo-600">Nova</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            我们致力于打造最前沿的 AI 解决方案
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">我们的使命</h2>
              <p className="text-gray-600 leading-relaxed">
                Nova 成立于 2026 年，致力于将最前沿的人工智能技术转化为实际可用的解决方案。
                我们相信 AI 能够帮助企业提升效率、创造价值，推动商业智能化转型。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">核心价值观</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✨ 创新 - 持续探索 AI 的无限可能</li>
                <li>🎯 专注 - 深耕企业级 AI 应用</li>
                <li>🤝 合作 - 与客户共同成长</li>
                <li>🛡️ 安全 - 守护数据安全与隐私</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 bg-white rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">团队成员</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Phoenix', role: 'CEO', emoji: '🔬' },
                { name: 'Nova', role: '产品设计', emoji: '🎨' },
                { name: 'Lunus', role: '技术开发', emoji: '💻' },
              ].map((member) => (
                <div key={member.name} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-2">{member.emoji}</div>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.role}</div>
                </div>
              ))}
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
