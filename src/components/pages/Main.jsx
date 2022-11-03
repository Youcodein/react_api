import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Maincont from "../include/Maincont";

const Main = () => {
  return (
    <>
      <Header />
      <Contents>
        <Maincont />
      </Contents>
      <Footer />
    </>
  );
};

export default Main;
