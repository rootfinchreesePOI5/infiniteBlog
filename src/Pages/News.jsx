import React, { useContext } from "react";
import { NewsContext } from "../Context/NewsContext";
import { useNavigate } from "react-router-dom";

function News() {
  const { latest, loading } = useContext(NewsContext);
  const navigate = useNavigate();

  return latest && (
    <div className="flex flex-col gap-8 py-[12%] md:py-[6%] px-[5%]">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 bg-red-600 rounded-full"></span>
        <h1 className="font-bold text-2xl md:text-4xl text-dark-main">Latest Updates</h1>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-lg text-center text-text">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latest.map((item, index) => (
            <div
              key={index}
              className="  overflow-hidden  transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/News/${item.title}`)}
            >
              {/* News Image */}
              <div className="w-full h-60 overflow-hidden">
                {
                  item.image ? <img src={item.image} alt="" /> : ""
                }
              </div>

              {/* News Content */}
              <div className="p-5 flex flex-col gap-3">
                <h1 className="text-xl font-semibold  line-clamp-2">{item.title}</h1>
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                <p className="text-gray-500 text-xs">{item.content?.slice(0, 100)}...</p>

                {/* News Source */}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-dark-main font-medium">{item.source.name}</span>
                  <span className="text-xs ">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
