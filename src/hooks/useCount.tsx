import { useEffect, useState } from 'react'
import { increment } from '../features/counterSlice'
import { useAppDispatch} from '../app/hooks'
const useCount = () => {
  const [count, setCount] = useState<number>(0)
  const dispatch = useAppDispatch()
  const incre = () => {
    setCount(prev => prev + 1)
    dispatch(increment)
  }
  console.log('this is invoked')
  return { count, incre}
}

export default useCount
