import { create } from "zustand";

export const useToggleUserDeleteModal = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));
