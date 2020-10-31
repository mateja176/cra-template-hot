import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  isOpen: boolean;
}

export const initialModalState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    set: (
      state,
      { payload: { isOpen } }: PayloadAction<Pick<ModalState, 'isOpen'>>,
    ) => {
      state.isOpen = isOpen;
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});
