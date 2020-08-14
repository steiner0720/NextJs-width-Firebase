import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useTranslation from 'next-translate/useTranslation'
import { counting } from '../redux/actions/counterActions'

const Home = () => {
  const count = useSelector((state) => state.counterReducer.count)
  const dispatch = useDispatch()
  const { t, lang } = useTranslation()
  console.log(t, lang)

  const handleChange = (num) => {
    counting({ dispatch, count: num })
  }
  return (
    <div>
      <span>{`current count : ${count}`}</span>
      <input type="number" onChange={(e) => handleChange(e.target.value)} />
      <br />
      <button onClick={() => handleChange(count - 1)}>Increase</button>
      <br />
      <button onClick={() => handleChange(count + 1)}>decrease</button>
    </div>
  )
}

export default Home
