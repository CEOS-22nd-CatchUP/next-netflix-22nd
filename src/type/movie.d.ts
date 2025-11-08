interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path?: string | null;
  overview?: string;
}

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface MovieImageProps {
  backdrop_path: string;
  title: string;
  height?: number;
}

// SearchListMovieItem.tsx에서 사용
interface MovieItemProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
}

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
