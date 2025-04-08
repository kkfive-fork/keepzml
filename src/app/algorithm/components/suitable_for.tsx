'use client'

import { motion } from 'motion/react'
import { variants } from './variants'

export default function SuitableFor() {
  return (
    <motion.div {...variants(0.2)} className='p-4 md:p-8 border-gray-200 border rounded keep'>
      <header className='font-bold'>适合人群</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li>所有前端程序员</li>
        <li>自学算法进展缓慢，难度高的小伙伴</li>
        <li>有冲击大厂面试的计划</li>
        <li>无法回应具体的项目难度</li>
      </ul>
    </motion.div>
  )
}
