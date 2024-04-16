  import React, { createContext, useState, useEffect } from "react";

  export const LikesContext = createContext();

  const saveLikesToLocalStorage = (likes) => {
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  const loadLikesFromLocalStorage = () => {
    const likes = JSON.parse(localStorage.getItem("likes")) || {};
    return likes;
  };

  export const LikesProvider = ({ children }) => {
    const [likes, setLikes] = useState(loadLikesFromLocalStorage());

    const toggleLike = (blogId) => {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [blogId]: !prevLikes[blogId],
      }));
    };

    useEffect(() => {
      saveLikesToLocalStorage(likes);
    }, [likes]);

    return (
      <LikesContext.Provider value={{ likes, toggleLike }}>
        {children}
      </LikesContext.Provider>
    );
  };
