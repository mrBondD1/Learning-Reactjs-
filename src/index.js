import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._SX329_BO1,204,203,200_.jpg",
  title: "The Lincoln Highway: A Novel",
  author: "Amor Towles ",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/31Xe0xltrgS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Burn After Writing (Pink) ",
  author: "Sharon Jones ",
};
const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51wfzg618CL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "The Wish",
  author: "Nicholas Sparks ",
};


const BookList = () => { 
  return <section>
   <Books img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
   <Books img={secondBook.img} title={secondBook.title} author={secondBook.author} />
   <Books img={thirdBook.img} title={thirdBook.title} author={thirdBook.author} />
  </section>;
};


const Books = ({img, title, author}) => {
  return(
    <>
 <article>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h3>{author}</h3>
 </article>
  </>
  )
}


ReactDOM.render(<BookList />, document.getElementById("root"));
