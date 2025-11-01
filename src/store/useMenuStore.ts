import { create } from 'zustand';

interface MenuStore {
  active: number;
  setActive: (i: number) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  active: 0,
  setActive: (i: number) => set({ active: i }),
}));
