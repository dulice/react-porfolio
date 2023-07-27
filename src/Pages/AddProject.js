import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export const port = process.env.REACT_APP_API_URL

const AddProject = () => {
  const [title, seTtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [source, setSource] = useState("");
  const [demo, setDemo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if(!title || !description || !image || !source || !demo) {
        return alert("Please fill all the field");
      } else {
        const { data: imageUrl } = await axios.post(`${port}/upload`, {image});
        if(imageUrl) {
          await axios.post(`${port}/projects`, {
            title,
            description,
            image: imageUrl,
            source,
            demo
          });
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto sm:px-6 lg:px-10 mt-15">
      <div className="border rounded-sm shadow-sm px-10 py-5 m-10">
        <p className="text-center text-xl font-bold">Add Project</p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center">
            <label htmlFor="image">
              {image ? (
                <img src={image} alt="" className="h-60 my-3" />
              ) : (
                <Icon
                  icon="mdi:camera-plus-outline"
                  className="text-7xl my-3"
                />
              )}
            </label>
            <input
              className="hidden"
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </div>

          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => seTtitle(e.target.value)}
            className="my-4 p-3 w-full border border-gray-300 hover:border-pink-400 focus:border-pink-400 shadow-sm hover:shadow-pink-300 rounded-md duration-300 outline-none"
          />

          <label htmlFor="source">Source:</label>
          <input
            id="source"
            type="text"
            placeholder="Source..."
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="my-4 p-3 w-full border border-gray-300 hover:border-pink-400 focus:border-pink-400 shadow-sm hover:shadow-pink-300 rounded-md duration-300 outline-none"
          />

          <label htmlFor="demo">Demo:</label>
          <input
            id="demo"
            type="text"
            placeholder="Demo..."
            value={demo}
            onChange={(e) => setDemo(e.target.value)}
            className="my-4 p-3 w-full border border-gray-300 hover:border-pink-400 focus:border-pink-400 shadow-sm hover:shadow-pink-300 rounded-md duration-300 outline-none"
          />

          <label htmlFor="description">Description:</label>
          <ReactQuill
            value={description}
            onChange={setDescription}
            style={{ height: "200px" }}
          />

          <div className="flex justify-end mt-14">
            <button disabled={isLoading}
              type="submit"
              className="text-white px-4 py-2 rounded-full bg-skin-base hover:bg-tahiti-100 active:bg-tahiti-200 flex justify-center items-center"
            >
              <Icon icon="mdi:plus" className="pr-1 text-2xl" />
              <span>{isLoading ? "Adding" : "Add"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
