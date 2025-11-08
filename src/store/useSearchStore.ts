import { searchMovie } from '@/api/tmdb';
import { create } from 'zustand';

interface SearchState {
  query: string;
  results: any[];
  isLoading: boolean;
  error: string | null;
  setQuery: (query: string) => void;
  search: () => Promise<void>; // 비동기 액션
}
export const useSearchStore = create<SearchState>((set, get) => ({
  query: '',
  results: [],
  isLoading: false,
  error: null,

  setQuery: (query) => set({ query }),

  search: async () => {
    const { query } = get();
    if (!query.trim()) {
      set({ results: [] });
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const data = await searchMovie(query);
      set({ results: data, isLoading: false });
    } catch (error) {
      set({ error: '검색 실패', isLoading: false });
    }
  },
}));
