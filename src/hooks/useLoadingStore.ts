import { create } from "zustand";

interface LoadingStore {
  loading: number;
  setLoading: (v: number) => void;
  resetLoading: () => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  loading: 0,
  setLoading: (loading) => set({ loading }),
  resetLoading: () => set({ loading: 0 }),
}));
