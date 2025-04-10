import { useRef, useState } from 'react'
import Button from '@/components/ui/button'
import Number from './number'

export default function Demo01() {
  const arr = useRef([1, 2, 3, 4, 5])
  const [current, setCurrent] = useState(0)

  function __clickprev() {
    let _cur = arr.current.length - 1
    if (current > 0) {
      _cur = current - 1
    }
    setCurrent(_cur)
  }

  function __clicknext() {
    let _cur = 0
    if (current < arr.current.length - 1) {
      _cur = current + 1
    }

    setCurrent(_cur)
  }

  return (
    <div className='flex items-center justify-center space-x-2'>
      <Button onClick={__clickprev}>上一页</Button>

      <div className='h-40 flex-1 bg-amber-200 text-2xl flex items-center justify-center rounded-md'>
        <Number value={arr.current[current]} />
      </div>
      <Button onClick={__clicknext}>下一页</Button>
    </div>
  )
}