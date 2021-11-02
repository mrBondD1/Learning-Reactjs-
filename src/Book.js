import React from 'react';
import "./index.css";

const Book = (props) => {
  const clickHandler = (e) => {
    console.log(e.target);
    alert("hello world!");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  const { img, title, author } = props;
  return (
    <article
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      

      <button type="button" onClick={clickHandler}>
        Reference
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex Reference
      </button>
    </article>
  );
};

export default Book
