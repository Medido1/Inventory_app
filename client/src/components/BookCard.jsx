import { useEffect } from "react"

function BookCard({book}) {
  return (
    <div className="bg-slate-100 p-4 flex mb-4 rounded-md">
      <img 
        className="h-[180px]"
        src={book.cover} alt={`${book.title} cover`}
      />
      <div className="ml-2 text-center flex-1">
        <h2 className="text-2xl">{book.title}</h2>
        <p>{book.author}</p>
        <ul className="text-blue-400">
          {book.categories.map((category) =>
            <li key={category}>
              {category}
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default BookCard;