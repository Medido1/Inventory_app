import { Link } from "react-router-dom";
import emptyCoverIcon from '../assets/question-sign.png';
import { GlobalContext } from "../context/GlobalContext";
import { BooksContext } from "../context/BooksContext";
import { AppStateContext } from "../context/AppStateContext";
import { useContext } from "react";

function BookCard({book}) {
  const {setShowForm} = useContext(GlobalContext)
  const {booksData, setBooksData} = useContext(BooksContext)
  const {setCurrentBook} = useContext(AppStateContext)

  function deleteBook(id) {
    if (
      window.confirm("Are you sure you want to delete this book ?")
    ) {
      const filterdBooks = booksData.filter((book) => book.id !== id)
      setBooksData(filterdBooks)
    }
  }

  function editBook(id) {
    setShowForm(true)
    const targetBook = booksData.find((book) => book.id === id);
    setCurrentBook(targetBook)
  }

  return (
    <div className="bg-slate-100 p-4 mb-4 rounded-md sm:max-w-[300px]">
      <div className="flex sm:flex-col">
        {!book.cover ?
          <div className="border-2 border-dashed p-4 flex flex-col
            items-center justify-center max-w-[40%] text-center h-[180px]">
            <img
              className="h-10"
              src={emptyCoverIcon} alt="no cover" />
            <p>No Cover provided ! </p>
          </div>
          :
          <img className="h-[160px] sm:h-[250px] max-w-[200px] sm:mx-auto" src={book.cover} alt={`${book.title} cover`}/>
        }
        <div className="mx-auto text-center flex-1">
          <h2 className="text-2xl">{book.title}</h2>
          <p>{book.author}</p>
          <ul className="text-blue-500 flex flex-col">
            {book.categories?.map((category) =>
              <Link
                to={`/categories/${category}`}
                key={category}>
                {category}
              </Link>
            )}
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button 
          onClick={() => editBook(book.id)}
          className="bg-green-200 px-4 py-2 rounded-lg cursor-pointer"
          aria-label="edit book"
          >
          Edit
        </button>
        <button
          onClick={() => deleteBook(book.id)}
          className="bg-red-200 px-4 py-2 rounded-lg cursor-pointer"
          aria-label="delte book"
        >
          Delete
        </button>
      </div>

    </div>
  )
}

export default BookCard;