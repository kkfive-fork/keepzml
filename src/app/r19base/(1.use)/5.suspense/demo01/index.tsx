import { Suspense } from 'react'
import Message from './message'
import Skeleton from 'components/ui/skeleton'
import { getMessage } from './api'

export default function Page() {
  const promise = getMessage()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
