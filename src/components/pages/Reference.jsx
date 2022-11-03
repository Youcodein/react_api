import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont.jsx";
import Contact from "../layout/Contact";

//변수: 저장, 추가, 변경 ---> 자동 변경(리액트 훅의 장점)

//클래스 컴퍼넌트 / 함수형 컴퍼넌트 --> 리액트 훅(면접질문)

const Reference = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
      .then((response) => response.json())
      // .then((result) => console.log(result.data.htmlRefer))
      .then((result) => setReferences(result.data.htmlRefer))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Reference", "reference API"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Reference;
