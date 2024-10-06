import { create } from "zustand";

export const useToggleUserUpdateModal = create((set) => ({
  openU: false,
  setOpenU: () => set((state) => ({ openU: !state.openU })),
}));
