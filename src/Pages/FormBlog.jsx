import React, { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { at, imageIcon, save, savedIcon } from "../assets/images";
import axios from "axios";
import { toast } from "sonner";

function FormBlog() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
    const date = new Date();

    const [saved, setSaved] = useState(false);
    const [addLink, setAddLink] = useState(false);
    const navigate = useNavigate();
    const { userData, backendUrl, token } = useContext(AppContext);

    const toggleSaved = useCallback(() => setSaved((prev) => !prev), []);
    const toggleLink = useCallback(() => setAddLink((prev) => !prev), []);

    // Send to DB
    const addBlog = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("content", content);
            formData.append("source", userData.username);
            formData.append("publishedAt", date);
            formData.append("url", url);

            const response = await axios.post(`${backendUrl}/api/user/add-post`, formData, {
                headers: { 
                    token,
                    "Content-Type": "multipart/form-data" // Ensure proper content type
                }
            });

            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/Blog");
            } else {
                toast.error(response.data.error || "Something went wrong");
            }
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            toast.error("Failed to add post");
        }
    };

    return (
        <div className="flex h-fit items-center justify-center pt-20 md:pt-16">
            <form onSubmit={addBlog} encType="multipart/form-data" className="w-full max-w-3xl bg-opacity-10 backdrop-blur-xl p-6 md:p-12">
                {/* Image Upload */}
                <label className="w-full h-60 flex flex-col items-center justify-center border border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 transition">
                    {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="max-h-full object-cover rounded-xl"
                        />
                    ) : (
                        <div className="text-gray-400 flex flex-col items-center">
                            <img
                                src={imageIcon}
                                alt="Upload Icon"
                                className="w-8 h-8 mb-2 opacity-70"
                            />
                            <span className="text-sm">Upload Image Here</span>
                        </div>
                    )}
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files.length > 0) {
                                setImage(e.target.files[0]);
                            }
                        }}
                    />
                </label>

                {/* Title */}
                <div className="mt-6 relative">
                    <input
                        type="text"
                        placeholder="Post Title*"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full text-2xl bg-transparent border-b border-gray-600 outline-none py-2"
                    />
                </div>

                {/* Description */}
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Description*"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full text-lg bg-transparent border-b border-gray-600 outline-none py-2"
                    />
                </div>

                {/* Text Area */}
                <textarea
                    className="w-full h-40 bg-transparent border border-gray-600 rounded-xl p-4 mt-4 outline-none transition"
                    placeholder="Share Your Thoughts*"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

                {/* Buttons & Icons */}
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4">
                        <img
                            onClick={toggleSaved}
                            className="w-8 h-8 p-1 cursor-pointer transition hover:scale-110"
                            src={saved ? savedIcon : save}
                            alt="Save"
                        />
                        <div className="flex items-center gap-1">
                            <img
                                onClick={toggleLink}
                                className="w-8 h-8 p-1 cursor-pointer transition hover:scale-110"
                                src={at}
                                alt="Add Link"
                            />
                            <p className="underline hidden md:flex md:max-w-[50vh] overflow-x-scroll">{url}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-600 transition"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>
                        <button className="px-8 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
                            Post
                        </button>
                    </div>
                </div>

                {/* Add Link Field */}
                {addLink && (
                    <div className="flex items-center bg-gray-800 rounded-xl p-3 mt-4">
                        <input
                            type="text"
                            placeholder="Add Link" 
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full bg-transparent outline-none text-gray-300"
                        />
                        <button onClick={() => setAddLink(false)} className="ml-2 px-8 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                            Save
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default FormBlog;
