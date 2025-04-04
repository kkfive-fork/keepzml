import { useState, useEffect } from 'react'
import Skeleton from 'components/ui/skeleton'
import Message from './message'
import { getMessage } from './api'

export default function Page() {
  const [content, update] = useState({ value: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  function __handler() {
    setLoading(true)
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button className='button' onClick={__handler}>更新数据</button>
      </div>
      {loading ? <Skeleton /> : <Message message={content.value} />}
    </>
  )
}
