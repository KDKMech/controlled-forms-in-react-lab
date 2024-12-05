import { useState } from "react";
import BookCard from "./bookCard";

const Bookshelf = (props) => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBooks, setNewBooks] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    // console.log(`testing`);
    setNewBooks({ ...newBooks, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([ ...books, newBooks]);
    setNewBooks({ title: "", author: "" });
    // console.log({books});
    
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              value={newBooks.title}
              onChange={handleInputChange}
            />
            <label htmlFor="auther">Auther:</label>
            <input
              id="author"
              name="author"
              value={newBooks.author}
              onChange={handleInputChange}
            />
            <button type="submit">Add New Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => {
                return (
                <BookCard key={index} {...book}/>
            )})}

        </div>
      </div>
    </>
  );
};

export default Bookshelf;
