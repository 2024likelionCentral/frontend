import React from 'react'
import Main01 from '../../components/main/Main01'
import Main02 from '../../components/main/Main02'
import Header from '../../components/main/Header'

const Main = () => {
  return (
    <>
    <Header/>
    <div className='main_wrap'>
        <Main01/>
        <Main02/>
    </div>
    </>
    
  )
}

export default Main