import { use, useReducer, useMemo } from 'react'
import Flex from 'components/Flex'
import Pagination from 'components/Pagination'

export default function CurrentList({promise, onChange, loading}) {
  const results = use(promise)
  const [, forceUpdate] = useReducer((boolean) => !boolean, true)

  let list = useMemo(() => {
    return results.map(item => ({
      selected: false,
      ...item
    }))
  }, [promise])

  function __radioHandler(e, i) {
    list[i].selected = e.target.checked
    forceUpdate()
  }

  const count = list.reduce((prev, cur) => {
    if(cur.selected) { prev += 1 }
    return prev
  }, 0)

  function pageChange(index) {
    onChange && onChange({current: index})
  }

  return (
    <div className={loading ? 'opacity-70' : 'opacity-100'}>
      {list.map((item, i) => (
        <Flex key={`h${i}`}>
          <input type="checkbox" className='w-5 mr-4' checked={item.selected} onChange={(e) => __radioHandler(e, i)} />
          <div className='flex border p-4 items-center my-4 rounded-md flex-1'>
            <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt=''/>
            <div className='flex-1 ml-4'>
              <div className='font-bold'>{item.name}</div>
              <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
            </div>
          </div>
        </Flex>
      ))}
      <div className='mb-4'>选中项一共有：{count}</div>
      <Pagination total={50} onChange={pageChange} />
    </div>
  )
}
