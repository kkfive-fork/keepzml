'use client'
import { motion } from 'motion/react'
import { variants } from './variants'

import Intro from './intro.mdx'
import { Code, InlineCode } from 'components/codehike/code'

export default function SuitableFor() {
  return (
    <motion.div {...variants(0)} className='p-4 md:p-8 border-gray-200 border rounded'>
      <header className='font-bold'>专栏简介</header>

      <div className="keep">
        <Intro components={{ Code, InlineCode }} />
      </div>

    </motion.div>
  )
}
