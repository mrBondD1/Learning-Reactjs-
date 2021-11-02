import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

import {BooksArr} from './booksArr';
import Book from './Book'


const BookList = () => { 
  return <section>
    {BooksArr.map(book => {
      return (
       <Book key={book.id} {...book}>
       </Book>
      )
    })}
  </section>;
};



ReactDOM.render(<BookList />, document.getElementById("root"));
