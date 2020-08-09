/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counting } from '../redux/actions/counterActions'

const Index = () => {
  const count = useSelector((state) => state.counterReducer.count)
  const dispatch = useDispatch()

  const handleChange = (num) => {
    counting({ dispatch, count: num })
  }

  // eslint-disable-next-line no-undef
  console.log(count)

  return (
    <div>
      <span>current count : {count}</span>
      <input type="number" onChange={(e) => handleChange(e.target.value)} />
      <br />
      <button onClick={() => handleChange(count - 1)}>Increase</button>
      <br />
      <button onClick={() => handleChange(count + 1)}>decrease</button>
    </div>
  )
}

export default Index
