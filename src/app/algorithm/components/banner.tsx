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
        <div className='absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50/30 to-cyan-50/20'></div>

        {/* 网格背景 */}
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '-25px -25px',
        }}></div>

        {/* 几何装饰元素 */}
        <div className='absolute inset-0'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/10 to-transparent transform rotate-45'></div>
          <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-teal-100/10 to-transparent transform -rotate-45'></div>
        </div>

        {/* 动态光效 */}
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-emerald-200/20 to-cyan-200/10 rounded-lg transform rotate-12 animate-float'></div>
          <div className='absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-tl from-teal-200/20 to-emerald-200/10 rounded-lg transform -rotate-12 animate-float-delayed'></div>
        </div>

        {/* 点缀元素 */}
        <div className='absolute top-20 right-32 w-3 h-3 bg-emerald-300/30 rounded-full'></div>
        <div className='absolute bottom-24 left-40 w-2 h-2 bg-teal-300/30 rounded-full'></div>
        <div className='absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-300/30 rounded-full'></div>
      </div>

      <div className='relative z-10 flex-1'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-semibold'>算法 . 面试冲刺</span>
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

          {subscrible.algorithm === 1 ? (
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
          许多前端开发害怕算法。但是，作为一名程序员，终究是要掌握算法的。那就不要犹豫，从这本专栏开始，用一种相对轻松的方式，我们一起来攻克它！本专栏为<strong>面试冲刺</strong>而设计，有相关需求的小伙伴，快来订阅吧！
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
