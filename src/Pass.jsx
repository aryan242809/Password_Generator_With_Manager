import React from 'react'
import Passgen from './components/Passgen'
import { Route , Routes } from 'react-router-dom'
import Passmanage from './components/pass_manage/Passmanage'
import Nav from './components/navbar/Nav'

function Pass() {
  return (
    <div>
      <Nav />
     <Routes>
     <Route path='/' element ={<Passmanage/>} />
     <Route path='/password_generator' element ={<Passgen/>} />
     </Routes>
    </div>
  )
}

export default Pass
