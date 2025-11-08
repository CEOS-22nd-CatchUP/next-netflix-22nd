import { getPopularMoviesInClient, searchMovie } from '@/libs/tmdb';
import { create } from 'zustand';

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

    set({ isLoading: true, page: 1, hasMore: true });

    if (!query.trim()) {
      try {
        const data = await getPopularMoviesInClient(1);
        set({ results: data, isLoading: false, hasMore: true, page: 1 });
      } catch (error) {
        set({ results: [], isLoading: false, hasMore: false });
      }
      return;
    }

    try {
      const data = await searchMovie(query, 1);
      set({ results: data, isLoading: false, hasMore: data.length > 0 });
    } catch (error) {
      set({ results: [], isLoading: false, hasMore: false });
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
}));
