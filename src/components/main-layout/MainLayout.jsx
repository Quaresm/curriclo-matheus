import React from 'react'
import Header from '..header/Header'

const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
    
  )
}

export default MainLayout