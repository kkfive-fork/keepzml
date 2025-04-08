'use client'

import { motion } from 'motion/react'
import { variants } from './variants'

export default function SuitableFor() {
  return (
    <motion.div {...variants(0.2)} className='p-4 md:p-8 border-gray-200 border rounded keep'>
      <header className='font-bold'>适合人群</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li>前端组长</li>
        <li>项目架构师、前端 mentor、项目 Leader</li>
        <li>高级前端工程师</li>
        <li>独立开发者</li>
        <li>React 进阶遇到瓶颈，需要更进一步的朋友</li>
      </ul>
    </motion.div>
  )
}
