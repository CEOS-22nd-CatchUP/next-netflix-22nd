'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Movie } from '@/type/type';
import Image from 'next/image';
import { IMAGE_BASE_URL } from '@/api/tmdb';


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
    <div className="w-full max-w-[600px] mx-auto">
      <Slider {...settings}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id} className="flex justify-center">
              <div 
                className="w-[102px] h-[102px] rounded-full overflow-hidden"
              >
                <Image 
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title} 
                  width={102}
                  height={102}
                  className="object-cover w-full h-full" 
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export function RectangleSliders({movies}: SlidersProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    arrows: false,
  };

  const items = Array.from({ length: 7 }, (_, i) => `안녕 ${i + 1}`);

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <Slider {...settings}>
       {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id} className="px-1">
              <div className="w-[103px] h-[161px] rounded-[2px] overflow-hidden">
                <Image
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  width={103}
                  height={161}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export function BigRectangleSliders({movies}: SlidersProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    arrows: false,
  };

  const items = Array.from({ length: 7 }, (_, i) => `안녕 ${i + 1}`);

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <Slider {...settings}>
       {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id} className="px-1">
              <div className="w-[154px] h-[251px] rounded-[2px] overflow-hidden">
                <Image
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  width={154}
                  height={251}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}