import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashTag from "../include/UnsplashTag";
import Contact from "../layout/Contact";
const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);


  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=rLzpIncf8xzBqXQBwEHmlns7US0iC_Se4GO-02oXIm4&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      // .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  // search

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=rLzpIncf8xzBqXQBwEHmlns7US0iC_Se4GO-02oXIm4&query=vintage&count=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log(error));

      fetch(
        "https://api.unsplash.com/photos/random?client_id=rLzpIncf8xzBqXQBwEHmlns7US0iC_Se4GO-02oXIm4&query&count=10"
      )
        .then((response) => response.json())
        .then((result) => setRandom(result))
        .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      <Header />
      <Contents>
        <Title title={["unsplash", "referece api"]} />
        <UnsplashSlider random={random}/>
        <UnsplashSearch onSearch={search} />
        <UnsplashTag />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Unsplash;