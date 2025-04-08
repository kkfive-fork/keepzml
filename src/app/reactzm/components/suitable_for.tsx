'use client'

import { motion } from 'motion/react'
import { variants } from './variants'

export default function SuitableFor() {
  return (
    <motion.div {...variants(0.2)} className='p-4 md:p-8 border-gray-200 border rounded keep'>
      <header className='font-bold'>适合人群</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li>入门学习 React</li>
        <li>具备基础的 JavaScript 能力，第一次接触 React 知识，想要开始学习 React 的朋友</li>
        <li>React 基础不够扎实，需要重新学习 React 的朋友</li>
        <li>未领悟 React 哲学，对 React 认知不够精准，需要纠正与夯实自己 React 知识体系的朋友</li>
        <li>React 进阶遇到瓶颈，需要更进一步的朋友</li>
      </ul>
    </motion.div>
  )
}
