import React, { useContext } from "react";
import { NewsContext } from "../Context/NewsContext";
import Hero from "../Components/Hero";
import Recents from "../Components/Recents";
import TopPosts from "../Components/TopPosts";
import { useNavigate } from "react-router-dom";

function Home() {
  const { loading, imagesLoaded } = useContext(NewsContext);
  const navigate = useNavigate();

  if (loading || !imagesLoaded) {
    return <p className="text-center text-lg text-gray-600">Loading...</p>;
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 py-[7rem] px-6 md:px-12">
      <Hero />
      <div className="flex flex-col gap-14 w-full">
        <Recents />
        <TopPosts />
      </div>
      <button
        onClick={() => navigate("/News")}
        className="p-3 px-10 border border-gray-500 rounded-md hover:bg-black hover:text-white transition-all duration-500"
      >
        Load More
      </button>
    </div>
  );
}

export default Home;