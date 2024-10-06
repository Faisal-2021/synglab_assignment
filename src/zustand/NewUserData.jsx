// not used any where
import { create } from "zustand";

export const useNewUserData = create((set) => ({
  users: [],
  setUsers: (allusers) => {
    set((state) => ({
      users: [...allusers],
    }));
  },
  addNewUser: (newUsers) => {
    set((state) => ({
      users: [...state.users, newUsers],
    }));
  },

  updateUser: (newUser) =>{
    set((state) => ({
      users: [...state.users, newUser],
      
    }));
  },
    // set((state) => ({ user: { ...state.user, ...newUser } })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
