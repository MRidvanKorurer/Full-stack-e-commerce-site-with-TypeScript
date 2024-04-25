import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
    isSearchShow: boolean,
    isDialogShow: boolean,
}

const initialState: ModalState = {
  isSearchShow: false,
  isDialogShow: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isSearchShowTrue: (state) => {
        state.isSearchShow = true;
    },
    isSearchShowFalse: (state) => {
        state.isSearchShow = false;
    },
    isDialogShowTrue: (state) => {
      state.isDialogShow = true
    },
    isDialogShowFalse: (state) => {
      state.isDialogShow = false
    }
  },
})

export const {isSearchShowTrue, isSearchShowFalse, isDialogShowTrue, isDialogShowFalse} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;