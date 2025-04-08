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
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50'></div>

        {/* 网格背景 */}
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '-25px -25px',
        }}></div>

        {/* 几何装饰元素 */}
        <div className='absolute right-0 top-0 w-64 h-64 opacity-20'>
          <div className='absolute inset-0 border-2 border-blue-200 rounded-lg transform rotate-45'></div>
          <div className='absolute inset-4 border-2 border-blue-300 rounded-lg transform -rotate-12'></div>
        </div>

        <div className='absolute left-0 bottom-0 w-48 h-48 opacity-20'>
          <div className='absolute inset-0 border-2 border-blue-200 rounded-full'></div>
          <div className='absolute inset-4 border-2 border-blue-300 rounded-full'></div>
        </div>

        {/* 渐变装饰线 */}
        <div className='absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent'></div>
        <div className='absolute bottom-1/4 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent'></div>
      </div>

      <div className='relative z-10 flex-1'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-semibold'>React 知命境 . 重构版</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <div className='text-sm flex items-center gap-1'>
            <Star size={16} className='text-pink-600' />
            <span className='text-pink-600'>1077 人已订阅</span>
          </div>

          <div className='hidden md:block'> · </div>

          <div className='hidden md:flex text-sm items-center gap-1 text-gray-600'>
            <User size={16} />
            <span>这波能反杀</span>
          </div>

          <div> · </div>

          {subscrible.reactzm === 1 ? (
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
          本专栏历时 4 年的沉淀与打磨，帮助了许多前端开发者成为 React 高手，<strong className='text-red-500'>是目前市面上最好的 React 入门学习资料</strong>。本次重构主要是结合作者多年实战经验，以及这些年里<strong>新手朋友们在学习 React 过程中，所遇到的问题</strong>，对专栏内容与实战案例进行重新设计，在原有的基础之上，对内容进行深度优化，让新手朋友入门变得更加顺滑，学习起来更加轻松。
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
