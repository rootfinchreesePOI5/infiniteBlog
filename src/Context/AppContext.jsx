import { createContext, useEffect, useState } from "react";
import { f_1 } from "../assets/images";
import { toast } from "sonner";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [theme, setTheme] = useState('dark');
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [posts, setPosts] = useState(false);
  const [stories, setStories] = useState(false);
  const [type, setType] = useState('Blog');

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  //user info array
  const [userData, setuserData] = useState(false)

  const Login = async () => {
    try {

    } catch (error) {

    }
  }

  const getUserData = async () => {
    try {
        const { data } = await axios.get(`${backendUrl}/api/user/profile`, { 
            headers: { token } 
        });
        console.log(data)

        if (data.success) {
            setuserData(data.userData);
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        toast.error(error.message);
    }
}



    // Fetch user data when token changes
    useEffect(() => {
      if (token) {
          getUserData();
      } else {
          setuserData(false);
      }
  }, [token]);

  const notify = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: "Loading...",
        success: "Logged out successfully!",
        error: "Failed to save.",
      }
    );
  }

  //const get user post and stories
  const UserPosts = async (params) => {
    
  }

  const UserStories = async (params) => {
    
  }

const value = {
  theme,
  setTheme,
  token,
  setToken,
  posts,
  setPosts,
  stories,
  setStories,
  type,
  setType,
  userData,
  setuserData,
  notify,
  backendUrl,
  getUserData
}
return (
  <AppContext.Provider value={value}>
    {props.children}
  </AppContext.Provider>
)
}

export default AppProvider
