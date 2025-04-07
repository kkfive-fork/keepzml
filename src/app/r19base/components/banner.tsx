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
        <div className='absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-sky-50/70 to-indigo-50/50'></div>

        {/* 网格背景 */}
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '-25px -25px',
        }}></div>

        {/* 动态光斑效果 */}
        <div className='absolute inset-0'>
          {/* 大型渐变光斑 */}
          <div className='absolute w-[500px] h-[500px] bg-gradient-to-r from-teal-200/20 to-sky-200/20 rounded-full filter blur-3xl animate-[float_8s_ease-in-out_infinite]'
            style={{ top: '-10%', right: '-10%' }}></div>
          <div className='absolute w-[400px] h-[400px] bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full filter blur-3xl animate-[float_10s_ease-in-out_infinite]'
            style={{ bottom: '-15%', left: '-5%' }}></div>

          {/* 小型动态光点 */}
          <div className='absolute w-24 h-24 bg-emerald-300/20 rounded-full filter blur-2xl animate-[pulse_5s_ease-in-out_infinite]'
            style={{ top: '30%', left: '25%' }}></div>
          <div className='absolute w-20 h-20 bg-sky-300/20 rounded-full filter blur-2xl animate-[pulse_7s_ease-in-out_infinite]'
            style={{ top: '60%', left: '60%' }}></div>
          <div className='absolute w-16 h-16 bg-indigo-300/20 rounded-full filter blur-2xl animate-[pulse_6s_ease-in-out_infinite]'
            style={{ top: '40%', right: '30%' }}></div>
        </div>
      </div>


      <div className='relative z-10 flex-1'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-semibold'>React 19 全解 . 基础版</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <div className='text-sm flex items-center gap-1'>
            <Star size={16} className='text-pink-600' />
            <span className='text-pink-600'>877 人已订阅</span>
          </div>

          <div className='hidden md:block'> · </div>

          <div className='hidden md:flex text-sm items-center gap-1 text-gray-600'>
            <User size={16} />
            <span>这波能反杀</span>
          </div>

          <div> · </div>

          {subscrible.r19base === 1 ? (
            <Link href={column_url} className='text-sm flex items-center gap-1 text-pink-600'>
              <ShoppingCart size={16} />
              <span>已订阅</span>
            </Link>
          ) : (
            <Link href={column_url} className='text-sm flex items-center gap-1 text-pink-600'>
              <ShoppingCart size={16} />
              <span>40元 . 立即订阅</span>
            </Link>
          )}
        </div>

        <div className='text-base text-gray-600 leading-8 my-6'>
          React@19 为开发者带来了新的开发理念，这是一次开发方式上的变革，在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习。 本专栏是全网第一本系统学习 React 19 的专栏。在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习，赶紧行动吧。
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
