import React, { useRef } from "react";
const MovieSearch = ({ onSearch }) => {
  // useRef() : inputRef를 사용하겠다 선언
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };
  return (
    <div className="movie__search">
      <div className="container">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색어를 입력해 주세요."
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          검색
        </button>
      </div>
    </div>
  );
};
export default MovieSearch;
