import { getPopularMoviesInClient, searchMovie } from '@/api/tmdb';
import { create } from 'zustand';

interface SearchState {
  query: string;
  results: any[];
  isLoading: boolean;
  page: number;
  hasMore: boolean;
  error: string | null;
  setQuery: (query: string) => void;
  search: () => Promise<void>;
  loadMore: () => Promise<void>;
  initialLoad: () => Promise<void>;
}
export const useSearchStore = create<SearchState>((set, get) => ({
  query: '',
  results: [],
  isLoading: false,
  page: 1,
  hasMore: true,
  error: null,

  setQuery: (query) => set({ query }),

  search: async () => {
    const { query } = get();

    if (!query.trim()) {
      set({ results: [], page: 1, hasMore: true });
      try {
        const data = await getPopularMoviesInClient(1);
        set({ results: data, isLoading: false, hasMore: true, page: 1 });
      } catch (error) {
        set({ results: [], isLoading: false, hasMore: false });
      }
      return;
    }

    set({ isLoading: true, page: 1, hasMore: true });
    try {
      const data = await searchMovie(query, 1);
      set({ results: data, isLoading: false, hasMore: data.length > 0 });
    } catch (error) {
      set({ results: [], isLoading: false, hasMore: false });
    }
  },

  loadMore: async () => {
    const { query, page, results, isLoading, hasMore } = get();
    if (isLoading || !hasMore) return;

    set({ isLoading: true });
    const nextPage = page + 1;
    try {
      let newData = [];
      if (query) {
        newData = await searchMovie(query, nextPage);
      } else {
        newData = await getPopularMoviesInClient(nextPage);
      }

      set((state) => {
        const existingIds = new Set(state.results.map((m) => m.id));
        const uniqueNewData = newData.filter((m: any) => !existingIds.has(m.id));
        return {
          results: [...state.results, ...uniqueNewData],
          page: nextPage,
          isLoading: false,
          hasMore: newData.length > 0,
        };
      });
    } catch (error) {
      set({ isLoading: false, hasMore: false });
    }
  },
  initialLoad: async () => {
    const { results, query, isLoading } = get();
    if (results.length > 0 || query || isLoading) return;

    set({ isLoading: true });
    try {
      const data = await getPopularMoviesInClient(1);
      set({ results: data, page: 1, hasMore: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
    }
  },
}));
