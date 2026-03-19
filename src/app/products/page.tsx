'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Nova AI 助手',
      description: '基于大语言模型的智能助手，支持多轮对话、知识问答、文档处理等功能',
      features: ['智能对话', '文档分析', 'API 集成', '定制化训练'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      name: 'Nova 自动化引擎',
      description: '端到端业务流程自动化平台，支持工作流编排、任务调度、监控告警',
      features: ['可视化编排', '智能调度', '实时监控', '故障恢复'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      name: 'Nova 数据分析',
      description: 'AI 驱动的数据分析平台，支持数据可视化、趋势预测、异常检测',
      features: ['智能可视化', '趋势预测', '异常检测', '报告自动生成'],
      color: 'from-green-500 to-teal-600'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            我们的 <span className="text-indigo-600">产品</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            探索我们的 AI 产品家族
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                <span className="text-5xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link href="/contact">
                  <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    了解更多
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-indigo-100 mb-6">联系我们，获取免费试用</p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors">
              立即咨询
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
