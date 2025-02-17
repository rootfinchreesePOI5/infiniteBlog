import React, { useContext, useEffect, useState, useCallback } from "react";
import { AppContext } from "../Context/AppContext";
import Add from "../Components/Add";
import { useNavigate } from "react-router-dom";
import { Boxing, plusB } from "../assets/images";
import axios from "axios";

function Myblog() {
  const { posts, setPosts, token, userData , backendUrl } = useContext(AppContext);
  const today = new Date().getDate();
  
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (!posts && Blogs.length > 0 && token) {
      setPosts(true);
    }
  }, [posts, Blogs, token, setPosts]);

  useEffect(() => {
    // Fetch the posts on component mount
    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/user/my-posts`, {
                headers: {
                    token, // Send the token to authenticate the user
                },
            });
            if (response.data.success) {
              console.log(response)
                setBlogs(response.data.posts);
            } else {
                toast.error("Failed to fetch posts");
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
            toast.error("Error fetching posts");
        }
    };
    fetchPosts();
}, [token, backendUrl]);

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[110vh] flex items-center justify-center pt-[20%] pb-[5%]  md:py-[10%] px-8 md:px-[8%]">
      {posts ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {Blogs.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer flex flex-col gap-3 md:min-h-[50vh]"
              >
                <img
                  className="w-full rounded-lg"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div>
                  <h1 className="text-xl font-semibold line-clamp-2">
                    {item.title}
                  </h1>
                  <div className="flex justify-between items-center mt-2">
                    <h5 className="text-sm text-dark-main font-medium">
                      {item.source}
                    </h5>
                    <span className="text-xs">Read More →</span>
                  </div>
                </div>
              </div>
            ))}
            <div
              onClick={() => navigate("/add/Blog")}
              className="min-h-[20vh] md:min-h-[30vh] rounded-2xl bg-zinc-800 border flex items-center justify-center cursor-pointer"
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
