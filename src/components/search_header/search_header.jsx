import styles from "./search_header.module.css";
import React, { memo, useRef } from "react";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value !== "") onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <a href="/youtube" className={styles.logo}>
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </a>
      <input
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="./images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
