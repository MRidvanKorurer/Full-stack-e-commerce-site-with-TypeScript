import React, { ReactNode, useEffect } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Search from '../components/modals/search/Search'
import Dialog from '../components/modals/dialog/Dialog'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {  isDialogShowFalse, isDialogShowTrue } from '../redux/slices/modelSlice'


interface IProps {
    children: ReactNode
}

const MainLayout: React.FC<IProps> = ({children}) => {
  // const {isDialogShow} = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true));

    setTimeout(() => {
      if(dialogStatus) {
        dispatch(isDialogShowTrue());
      }else {
        dispatch(isDialogShowFalse())
      }
    }, 2000);
  }, []);


  return (
    <div>
        <Header />
        <Search />
        <Dialog />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout