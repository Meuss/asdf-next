'use client'

/* Core */
import { useState } from 'react'

import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from '@/lib/redux'

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2)

  return (
    <div>
      <div className="flex justify-center items-center gap-3 my-5">
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-center"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
          />
        </div>
        <div className="flex justify-center items-center gap-3 my-5">
          <button onClick={() => dispatch(counterSlice.actions.incrementByAmount(incrementAmount))}>
            Add Amount
          </button>
          <button onClick={() => dispatch(incrementAsync(incrementAmount))}>Add Async</button>
          <button onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}>Add If Odd</button>
        </div>
      </div>
    </div>
  )
}
