import { create } from "zustand";

interface LoadingStore {
  loading: number;
  startLoading: () => void;
  finishLoading: () => void;
  setLoading: (progress: number) => void;
  resetLoading: () => void;
}

export const useLoadingStore = create<LoadingStore>((set) => {
  let timeouts: number[] = [];

  const clearAllTimeouts = () => {
    timeouts.forEach(clearTimeout);
    timeouts = [];
  };

  const loadingSteps = [
    { time: 300, value: 30 },
    { time: 500, value: 50 },
    { time: 1000, value: 70 },
    { time: 1600, value: 85 },
  ];

  return {
    loading: 0,

    startLoading: () => {
      clearAllTimeouts();
      set({ loading: 0 });

      loadingSteps.forEach((step) => {
        timeouts.push(
          window.setTimeout(() => set({ loading: step.value }), step.time),
        );
      });
    },

    finishLoading: () => {
      clearAllTimeouts();
      set({ loading: 100 });
      timeouts.push(window.setTimeout(() => set({ loading: 0 }), 300));
    },

    setLoading: (value) => {
      set({ loading: value });
    },

    resetLoading: () => {
      clearAllTimeouts();
      set({ loading: 0 });
    },
  };
});
