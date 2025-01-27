'use client'

import React from 'react'
import Header from './components/header/header'
import { Button } from '@material-tailwind/react'
import Login from './components/login/login'

const Home = () => {

  const [openModal, setOpenModal] = React.useState(false)

  const handleLoginOnClick = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
        <Header handleLoginOnClick = {handleLoginOnClick}/>
        <Login openModal = {openModal} setOpenModal = {setOpenModal}/>
        Main Section
    </div>
  )
}

export default Home