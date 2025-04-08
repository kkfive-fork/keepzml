'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { variants } from './variants'
import { start_path, column_url } from '../config'
import { ArrowRight, User, Star, ShoppingCart } from 'lucide-react'
import Button from '@/components/ui/button'
import { useLoginStore } from 'app/service'

export default function Banner() {
  const subscrible = useLoginStore((state) => state.subscrible)

  return (
    <motion.div {...variants(0)} className='relative p-4 md:p-8 flex border-gray-200 border rounded gap-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50'>
      {/* 现代几何装饰背景 */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* 主背景渐变 */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20'></div>

        {/* 网格背景 */}
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '-25px -25px',
        }}></div>

        {/* 动态波浪效果 */}
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute w-full h-64 bg-gradient-to-r from-blue-200/20 via-indigo-200/20 to-purple-200/20 blur-3xl transform -translate-y-1/2 animate-pulse'></div>
          <div className='absolute bottom-0 w-full h-64 bg-gradient-to-r from-purple-200/20 via-indigo-200/20 to-blue-200/20 blur-3xl transform translate-y-1/2 animate-pulse'></div>
        </div>

        {/* 光斑效果 */}
        <div className='absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl'></div>
        <div className='absolute bottom-10 left-10 w-24 h-24 bg-purple-200/20 rounded-full blur-xl'></div>

        {/* 装饰点阵 */}
        <div className='absolute top-1/4 right-1/4 w-2 h-2 bg-blue-300/40 rounded-full'></div>
        <div className='absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-300/40 rounded-full'></div>
        <div className='absolute top-1/2 right-1/2 w-1.5 h-1.5 bg-indigo-300/40 rounded-full'></div>
      </div>

      <div className='relative z-10 flex-1'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-semibold'>React 知命境 . 进阶尊享版</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <div className='text-sm flex items-center gap-1'>
            <Star size={16} className='text-pink-600' />
            <span className='text-pink-600'>1 人已订阅</span>
          </div>

          <div className='hidden md:block'> · </div>

          <div className='hidden md:flex text-sm items-center gap-1 text-gray-600'>
            <User size={16} />
            <span>这波能反杀</span>
          </div>

          <div> · </div>

          {subscrible.reactplus === 1 ? (
            <Link href={column_url} className='text-sm flex items-center gap-1 text-pink-600'>
              <ShoppingCart size={16} />
              <span>已订阅</span>
            </Link>
          ) : (
            <Link href={column_url} className='text-sm flex items-center gap-1 text-pink-600'>
              <ShoppingCart size={16} />
              <span>200元 . 立即订阅</span>
            </Link>
          )}
        </div>

        <div className='text-base text-gray-600 leading-8 my-6'>
          本专栏旨在帮助 React 开发者们能够在复杂项目中，快速的构建出高质量的项目代码架构。在复杂项目中，掌握一套优秀的、可维护性高的项目代码架构是每一位前端工程师都必备的高级技能。本专栏通过扎实的理论模型与丰富的项目实践，为大家全面系统的呈现我在十多年工作经验的基础之上，结合 React 摸索出来的一套优质项目代码架构。一方面可以有效的提高你的开发效率，另外一方面，在个人综合能力的提高上，也会大有裨益。
        </div>

        <div className='flex items-center gap-4'>
          <Link href={start_path}>
            <Button primary><ArrowRight size={15} /> <span>快速开始</span></Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
