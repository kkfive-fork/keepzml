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
  return (
    <motion.div {...variants(0.1)} className='p-4 md:p-8 border-gray-200 border rounded keep'>
      <header className='font-bold'>超前 2 折优惠购买，火热进行中</header>

      <p className='space-x-2 mt-2'>
        <PartyPopper className='inline-block text-red-500' size={18} />
        本专栏原价 <strong className='text-red-500'>1000 元</strong>。由于目前内容还未开始创作，特推出 2 折优惠购买，不要错过机会哦。其他说明：购买之后请务必进群交流学习心得，群内提供答疑服务，以及不定时直播讲解。目前群内学习氛围良好，欢迎加入。
      </p>

      <ul>
        <li>超前购买将会在内容开始正式更新时结束</li>
        <li>在我这里消费大于等于 2w，可获得本站全局阅读权限</li>
        <li>购买过《学霸级学习方法》，可获得叠加半价优惠</li>
      </ul>

      <div className='text-right'>
        <Link href={column_url} target='_blank'>
          <Button signal>{subscrible.algorithm === 1 ? '您已订阅' : '200 元 . 立即订阅'}</Button>
        </Link>
      </div>
    </motion.div>
  )
}
