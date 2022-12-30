import React from 'react'
import { MenuProvider } from './data/MenuContext'
import Header from './Header/Header'
import Menu from './Menu/Menu'

const Home  = () => {
  return (
    <MenuProvider>
    <Header />
    <Menu />
    </MenuProvider>
  )
}

export default Home