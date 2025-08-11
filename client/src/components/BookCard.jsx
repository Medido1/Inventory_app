import { Link } from "react-router-dom";
import emptyCoverIcon from '../assets/question-sign.png';


function BookCard({book}) {
  return (
    <div className="bg-slate-100 p-4 flex mb-4 rounded-md">
      {!book.cover ? 
        <div className="border-2 border-dashed p-4 flex flex-col
          items-center justify-center max-w-[40%] text-center h-[180px]">
          <img 
            className="h-10"
            src={emptyCoverIcon} alt="no cover" />
          <p>No Cover provided ! </p>
        </div>
        :
        <img className="h-[160px]" src={book.cover} alt={`${book.title} cover`}/>
      } 
      <div className="ml-2 text-center flex-1">
        <h2 className="text-2xl">{book.title}</h2>
        <p>{book.author}</p>
        <ul className="text-blue-400 flex flex-col">
          {book.categories.map((category) =>
            <Link 
              to={`/categories/${category}`}
              key={category}>
              {category}
            </Link>
          )}
        </ul>
      </div>

    </div>
  )
}

export default BookCard;