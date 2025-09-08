import { Link } from "react-router-dom";
import emptyCoverIcon from "../assets/question-sign.png";

function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="bg-slate-100 p-4 mb-4 rounded-md sm:max-w-[300px]">
      <div className="flex sm:flex-col">
        {!book.cover ? (
          <div
            className="border-2 border-dashed p-4 flex flex-col
            items-center justify-center max-w-[40%] text-center h-[180px]"
          >
            <img className="h-10" src={emptyCoverIcon} alt={`No cover available for ${book.title}`} />
            <p>No Cover provided ! </p>
          </div>
        ) : (
          <img
            className="h-[160px] sm:h-[250px] max-w-[200px] sm:mx-auto"
            src={book.cover}
            alt={`${book.title} cover`}
          />
        )}
        <div className="mx-auto text-center flex-1">
          <h2 className="text-2xl">{book.title}</h2>
          <p>{book.author}</p>
          <ul className="text-blue-500 flex flex-col">
            {book.categories?.map((category) => (
              <li key={category}>
                <Link to={`/categories/${category}`} >
                {category}
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => onEdit(book)}
          className="bg-green-200 px-4 py-2 rounded-lg cursor-pointer"
          aria-label="edit book"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(book)}
          className="bg-red-200 px-4 py-2 rounded-lg cursor-pointer"
          aria-label="delete book"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
