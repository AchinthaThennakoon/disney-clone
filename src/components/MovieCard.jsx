import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[200px] rounded-lg cursor-pointer hover:border-[3px] border-gray-200 hover:scale-110 
        transition-all duration-150 ease-in-out"
      />
    </>
  );
};

export default MovieCard;
