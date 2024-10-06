import { create } from 'zustand'

export const useToggleUserAddMOdel = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}))

