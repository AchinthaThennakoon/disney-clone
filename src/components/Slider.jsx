import React, { useEffect, useRef, useState } from "react";
import gloabalApi from "../services/gloabalApi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    gloabalApi.getTrendingMovies.then((response) => {
      console.log(response.data.results);
      setMovieList(response.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 128;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth + 128;
  };

  return (
    <div>
      <IoIosArrowBack
        className="hidden md:block text-white text-[30px] absolute
      mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <IoIosArrowForward
        className="hidden md:block text-white text-[30px] absolute
      mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto scrollbar-hide scroll-smooth px-16 py-4"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top
           rounded-md hover:border-[4px] border-gray-400"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
