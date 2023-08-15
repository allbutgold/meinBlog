import { create } from "zustand"
import { persist } from "zustand/middleware"

export const userStore = create(
  persist(
    (set) => ({
      username: null,
      userPic: null,
      isLoggedIn: null,
      setIsLoggedIn: (value) => set({ isLoggedIn: value }),
      setUsername: (value) => set({ username: value }),
      setUserPic: (value) => set({ userPic: value }),
    }),
    { name: "user-storage" }
  )
)
