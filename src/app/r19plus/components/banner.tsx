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
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/40'></div>

        {/* 网格背景 */}
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '-25px -25px',
        }}></div>

        {/* 几何图形装饰 */}
        <div className='absolute inset-0'>
          {/* 圆形装饰 */}
          <div className='absolute w-32 h-32 border-2 border-blue-200/30 rounded-full'
            style={{ top: '10%', right: '15%' }}></div>
          <div className='absolute w-24 h-24 border-2 border-purple-200/30 rounded-full'
            style={{ bottom: '20%', left: '10%' }}></div>

          {/* 动态装饰线条 */}
          <div className='absolute w-40 h-[1px] bg-gradient-to-r from-transparent via-blue-200/40 to-transparent transform rotate-45 animate-[pulse_4s_ease-in-out_infinite]'
            style={{ top: '30%', left: '20%' }}></div>
          <div className='absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-200/40 to-transparent transform -rotate-45 animate-[pulse_5s_ease-in-out_infinite]'
            style={{ bottom: '40%', right: '25%' }}></div>

          {/* 点状装饰 */}
          <div className='absolute w-2 h-2 bg-blue-400/30 rounded-full animate-[ping_3s_ease-in-out_infinite]'
            style={{ top: '45%', left: '35%' }}></div>
          <div className='absolute w-2 h-2 bg-purple-400/30 rounded-full animate-[ping_4s_ease-in-out_infinite]'
            style={{ bottom: '35%', right: '40%' }}></div>
        </div>
      </div>


      <div className='relative z-10 flex-1'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-semibold'>React 19 . 尊享版</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <div className='text-sm flex items-center gap-1'>
            <Star size={16} className='text-pink-600' />
            <span className='text-pink-600'>167 人已订阅</span>
          </div>

          <div className='hidden md:block'> · </div>

          <div className='hidden md:flex text-sm items-center gap-1 text-gray-600'>
            <User size={16} />
            <span>这波能反杀</span>
          </div>

          <div> · </div>

          {subscrible.r19plus === 1 ? (
            <Link href={column_url} className='text-sm flex items-center gap-1 text-pink-600'>
              <ShoppingCart size={16} />
              <span>已订阅</span>
            </Link>
          ) : (
            <Link href={column_url} className='text-sm flex items-center gap-1 text-pink-600'>
              <ShoppingCart size={16} />
              <span>400元 . 立即订阅</span>
            </Link>
          )}
        </div>

        <div className='text-base text-gray-600 leading-8 my-6'>
          在复杂项目中，掌握一套优秀的、可维护性高的项目代码架构是每一位前端工程师都必备的高级技能。本专栏通过扎实的理论模型与丰富的项目实践，为大家全面系统的呈现我在十多年工作经验的基础之上，结合 React 19 摸索出来的一套优质项目代码架构。一方面可以有效的提高你的开发效率，另外一方面，在个人综合能力的提高上，也会大有裨益。
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
