import React, { useContext, useEffect, useState } from 'react';
import { emptyProfile, logo, upload } from '../assets/images';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [state, setState] = useState('Login');
  const { setToken, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [password, setPass] = useState('');
  const [image, setImage] = useState(null); // Changed from false to null

  // **Detect autofill on mount**
  useEffect(() => {
    setTimeout(() => {
      setImage(document.querySelector("input[type='file']")?.value || '');
      setName(document.querySelector("input[type='text']")?.value || '');
      setEmail(document.querySelector("input[type='email']")?.value || '');
      setPass(document.querySelector("input[type='password']")?.value || '');
      console.log(backendUrl)
    }, 100);
  }, []);

  const changeState = () => {
    setState(state === 'Login' ? 'Subscribe' : 'Login');
  };

  const Login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password });
      if (data.success) {
        sessionStorage.setItem('token', data.token);
        setToken(data.token);
        toast.promise(
          new Promise((resolve) => setTimeout(resolve, 2000)),
          {
            loading: "Loading...",
            success: "Logged In successfully!",
            error: "Failed to save.",
          }
        );
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  const Subscribe = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
  
      const response = await axios.post(`${backendUrl}/api/user/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      if (response.data && response.data.success) {
        sessionStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        toast.success("Account created successfully! 🎉");
        navigate('/')
      } else {
        toast.error(response.data?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };
  
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 rounded-md shadow-zinc-800 shadow-lg w-[80%] md:w-[30%] md:p-12 p-6 items-center bg-black text-wgite">
        <div className="flex gap-2 items-center">
          <p className="text-xl text-dark-main">{state}</p>
          <p className="text-xl  flex items-center gap-2 ">
            <img className="bg-dark-main w-[35px] h-[35px] p-1 rounded-full" src={logo} alt="" />
            to infiniteBlog
          </p>
        </div>
        <form className="flex flex-col gap-3 w-full" onSubmit={state === 'Login' ? Login : Subscribe}>
          <div className="flex items-center justify-center">
            <label className={`${state === 'Login' ? 'hidden' : 'flex flex-col'} relative`} id="imagePick">
              <img className="w-20 rounded-full" src={image ? URL.createObjectURL(image) : upload} alt="" />
              <img className="w-8 rounded-full absolute bottom-6 left-6" src={image ? '' : emptyProfile} alt="" />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" className="hidden" id="imagPick" />
            </label>
          </div>
          {state === 'Login' ? (
            <p className="flex items-center w-full justify-center">Welcome back!</p>
          ) : (
            <div className="flex flex-col gap-1">
              <label className="text-sm">Username</label>
              <input
                className="w-full px-[15px] p-1.5 bg-gray-800 text-white border rounded"
                value={username}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="@user_1....."
                required
              />
            </div>
          )}
          <div className="flex flex-col gap-1">
            <label className="text-sm">Email</label>
            <input
              className="w-full px-[15px] p-1.5 bg-gray-800 text-white border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="......@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm">Password</label>
            <input
              className="w-full px-[15px] p-1.5 bg-gray-800 text-white border rounded"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="*********"
              required
            />
            <span className="text-xs">8-characters/@_/*/Aa/1-10</span>
          </div>
          <button
            className="w-full bg-dark-main text-white p-2 rounded-sm cursor-pointer  transition-all duration-700"
            type="submit"
          >
            {state}
          </button>
        </form>
        <p>
          {state === 'Login' ? "Don't have An Account/" : 'Already Subscribed/'}
          <span className="cursor-pointer text-dark-main underline" onClick={changeState}>
            {state === 'Login' ? 'Subscribe' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
