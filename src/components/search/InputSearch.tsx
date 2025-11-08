'use client';
import SearchIcon from '@/assets/svgs/search/searchIcon.svg?url';
import XIcon from '@/components/search/icons/XIcon';
import { useSearchStore } from '@/store/useSearchStore';
import Image from 'next/image';
import { useEffect } from 'react';

export default function InputSearch() {
  const { query, setQuery, search } = useSearchStore();

  const handleClear = () => {
    setQuery('');
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      search();
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [query, search]);

  return (
    <>
      <div className="bg-gray-2 flex h-[52px] w-full">
        <div className="mx-4 flex w-full flex-row items-center justify-between">
          <Image src={SearchIcon} alt="검색" />
          <input
            placeholder="Search for a show, movie, genre, e.t.c"
            className="placeholder-gray-0 text-text3-sb mx-2 flex-1 text-white caret-white focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <XIcon className="text-gray-0 cursor-pointer hover:text-white" onClick={handleClear} />
        </div>
      </div>
    </>
  );
}
