import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._SX329_BO1,204,203,200_.jpg",
    title: "The Lincoln Highway: A Novel",
    author: "Amor Towles ",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/31Xe0xltrgS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Burn After Writing (Pink) ",
    author: "Sharon Jones ",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51wfzg618CL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Wish",
    author: "Nicholas Sparks ",
  },
];


const BookList = () => { 
  return (
    <section>
      {books.map((book) => {
     
        return <section>
           <Books key={book.id} {...book}/>
          </section>
        
      })}
    </section>
  );
};


const Books = (props) => {

  const {img, title, author} = props;
  // console.log(props);
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
