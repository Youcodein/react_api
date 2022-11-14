import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider.jsx";
import YoutubeSearch from "../include/YoutubeSearch.jsx";
import YoutubeCont from "../include/YoutubeCont.jsx";
import Contact from "../layout/Contact";
const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyAQcU5mYU4iBw5jcjVWYZJxqA_qSDonCMQ&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=playlist&key=AIzaSyAQcU5mYU4iBw5jcjVWYZJxqA_qSDonCMQ&maxResults=32&type=video"
    )
      .then((response) => response.json())
      // .then((result) => setYoutubes(result))
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "reference api"]} />
        <YoutubeSlider />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Youtube;