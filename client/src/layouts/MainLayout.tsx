import React, { ReactNode } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

interface IProps {
    children: ReactNode
}

const MainLayout: React.FC<IProps> = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout