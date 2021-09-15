import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import useCount from '../hooks/useCount'
import { StateContext} from '../features/counterSlice'

const PageA = () => {
  const { count, incre } = useCount()
  const state = StateContext()
  console.log("🚀 ~ file: PageA.tsx ~ line 9 ~ PageA ~ state", state)
  const increment = () => {
    console.log('incre')
    incre()
  }
  return (
    <Layout>
      <h1>PageA</h1>
      <button
        onClick={increment}
      >plus</button>
      <h4>
        {count}
      </h4>
      <h4>
        {state}
      </h4>
    </Layout>
  )
}

export default PageA
