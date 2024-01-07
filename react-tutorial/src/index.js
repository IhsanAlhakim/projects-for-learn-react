import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import books from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        // return <Book key={book.id} book={book}></Book>;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// ReactDOM.render(<BookList />, document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
