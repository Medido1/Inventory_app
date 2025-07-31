import viewIcon from '../assets/viewbooks.gif';
import bookList from '../../books';
import BookCard from './BookCard';

function Books() {
  return (
    <div className="p-4">
      <div className='flex items-center gap-4 mb-4'>
        <img src={viewIcon} alt="icon" className='h-10' />
        <h1 className="text-2xl text-center">My Books</h1>
      </div>
      <ul>
        {bookList.map((book) => 
          <li key={book.id}>
            <BookCard book = {book}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Books;