'use client'

import Link from 'next/link'
import { PartyPopper } from 'lucide-react'
import { motion } from 'motion/react'
import { variants } from './variants'
import { column_url } from '../config'
import Button from '@/components/ui/button'
import { useLoginStore } from '@/app/service'

export default function SuitableFor() {
  const subscrible = useLoginStore((state) => state.subscrible)
  // if (subscrible.reactprinciple === 1) return null
  return (
    <motion.div {...variants(0.1)} className='p-4 md:p-8 border-gray-200 border rounded keep'>
      <header className='font-bold'>付费说明</header>

      <p className='space-x-2 mt-2'>
        <PartyPopper className='inline-block text-red-500' size={18} />
        本专栏绝大部分内容都可以<strong>免费阅读</strong>，您无需特意付费。仅有《React 哲学》需要付费才能阅读，其中内容为整本专栏的核心理论提炼，以及进阶使用的理论支持，通常情况下，我们无需阅读这部分内容也可以很好的掌握 React。如果你需要先提纲挈领的了解 React 的核心开发思想，或者你想要支持作者的创作，那么你可以点击下面的内容进行订阅。订阅之后可以加我好友进入付费交流群
      </p>

      <p className='space-x-2 mt-2'>
        <PartyPopper className='inline-block text-red-500' size={18} />
        在公众号上购买过《React 哲学》的朋友，可以直接在公众号上阅读，无需额外购买，两边的内容是完全一致的。<strong>也请勿单独联系我索要阅读权限，本专栏暂不支持单独赠送阅读权限</strong>
      </p>

      <div className='text-right'>
        <Link href={column_url} target='_blank'>
          <Button signal>{subscrible.reactzm === 1 ? '您已订阅' : '30 元 . 订阅'}</Button>
        </Link>
      </div>
    </motion.div>
  )
}
