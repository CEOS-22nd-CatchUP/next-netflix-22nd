'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { IMAGE_BASE_URL } from '@/api/tmdb';
import Link from 'next/link';

interface SlidersProps {
  movies: Movie[]; // Movie 객체 배열을 받음
}

export function CircleSliders({ movies }: SlidersProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mx-auto w-full max-w-[600px]">
      <Slider {...settings}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id} className="flex justify-center">
              <Link href={`/movie/${movie.id}`}>
                <div className="h-[102px] w-[102px] cursor-pointer overflow-hidden rounded-full">
                  <Image
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt=""
                    width={102}
                    height={102}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export function RectangleSliders({ movies }: SlidersProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    arrows: false,
  };

  // const items = Array.from({ length: 7 }, (_, i) => `안녕 ${i + 1}`);

  return (
    <div className="mx-auto w-full max-w-[600px]">
      <Slider {...settings}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id} className="px-1">
              <Link href={`/movie/${movie.id}`}>
                <div className="h-[161px] w-[103px] cursor-pointer overflow-hidden rounded-[2px]">
                  <Image
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt=""
                    width={103}
                    height={161}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export function BigRectangleSliders({ movies }: SlidersProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    arrows: false,
  };

  // const items = Array.from({ length: 7 }, (_, i) => `안녕 ${i + 1}`);

  return (
    <div className="mx-auto w-full max-w-[600px]">
      <Slider {...settings}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id} className="px-1">
              <Link href={`/movie/${movie.id}`}>
                <div className="h-[251px] w-[154px] cursor-pointer overflow-hidden rounded-[3px]">
                  <Image
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt=""
                    width={154}
                    height={251}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}
