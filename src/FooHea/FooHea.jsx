import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

export const FooHea = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

