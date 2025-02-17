import React, { useContext, useEffect, useState, useCallback } from "react";
import { AppContext } from "../Context/AppContext";
import Add from "../Components/Add";
import { useNavigate } from "react-router-dom";
import { Boxing, plusB } from "../assets/images";

function Myblog() {
  const { posts, setPosts, token, userData } = useContext(AppContext);
  const today = new Date().getDate();
  
  const [Blogs, setBlogs] = useState([
    {
      img: Boxing,
      Title: "Napheesa Collier wins $200K by taking Unrivaled 1-on-1 crown",
      Description:
        "Napheesa Collier of the WNBA’s Minnesota Lynx took home $200,000 on Friday...",
      Content:
        "MEDLEY, Fla. — Napheesa Collier of the WNBA’s Minnesota Lynx took home $200,000...",
      Source: userData?.username || "Unknown",
      publishedDate: today,
      url: "https://nypost.com/2025/02/15/sports/napheesa-collier-wins-200k-by-taking-unrivaled-1-on-1-crown/",
    },
  ]);

  useEffect(() => {
    if (!posts && Blogs.length > 0 && token) {
      setPosts(true);
    }
  }, [posts, Blogs, token, setPosts]);

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-0 px-8">
      {posts ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Blogs.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer flex flex-col gap-3 min-h-[50vh]"
              >
                <img
                  className="w-full rounded-lg"
                  src={item.img}
                  alt={item.Title}
                  loading="lazy"
                />
                <div>
                  <h1 className="text-xl font-semibold line-clamp-2">
                    {item.Title}
                  </h1>
                  <div className="flex justify-between items-center mt-2">
                    <h5 className="text-sm text-dark-main font-medium">
                      {item.Source}
                    </h5>
                    <span className="text-xs">Read More →</span>
                  </div>
                </div>
              </div>
            ))}
            <div
              onClick={() => navigate("/add/Blog")}
              className="min-h-[20vh] md:min-h-[50vh] rounded-2xl bg-zinc-800 border flex items-center justify-center cursor-pointer"
            >
              <img src={plusB} alt="Add Blog" />
            </div>
          </div>
          <Add array={Blogs} />
        </div>
      ) : (
        <div>
          <p className="text-2xl md:text-6xl lg:text-8xl font-extrabold text-stone-300">
            OOPS! You Have No Posts
          </p>
          <Add />
        </div>
      )}
    </div>
  );
}

export default Myblog;
