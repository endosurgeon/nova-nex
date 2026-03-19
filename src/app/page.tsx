'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Nova
          </motion.div>
          <nav className="flex gap-6">
            {['首页', '关于', '产品', '联系'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
              >
                <Link 
                  href={item === '首页' ? '/' : `/${item === '关于' ? 'about' : item === '产品' ? 'products' : 'contact'}`}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              下一代 AI 解决方案
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            融合前沿 AI 技术，为企业打造智能化未来
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/products">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
                了解更多
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-full font-medium hover:bg-indigo-50 transition-colors">
                联系我们
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            核心优势
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '智能决策', desc: 'AI 驱动的数据分析与决策支持系统', icon: '🧠' },
              { title: '自动化流程', desc: '端到端业务流程自动化解决方案', icon: '⚡' },
              { title: '安全可靠', desc: '企业级安全防护与合规保障', icon: '🛡️' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -5 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Nova. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
