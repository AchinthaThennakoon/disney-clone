import React, { useEffect, useRef, useState } from "react";
import gloabalApi from "../services/gloabalApi";
import MovieCard from "./MovieCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    setMoviesByGenreId();
  }, []);

  const setMoviesByGenreId = () => {
    gloabalApi.getMoviesByGenreId(genreId).then((response) => {
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
    <div className="relative">
      <IoIosArrowBack
        className="hidden md:block text-white text-[30px] absolute mt-16 left-[-30px] z-1
       cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 pt-5 pb-10 px-3 z-0"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>

      <IoIosArrowForward
        className="hidden md:block text-white text-[30px] absolute top-16
       cursor-pointer right-[-30px]"
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;
