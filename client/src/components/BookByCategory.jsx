import { useParams } from 'react-router-dom'; /* access URL parameters defined in route paths. */
import bookList from '../../books';
import { useEffect } from 'react';
import BookCard from './BookCard';

function BookByCategory() {
  const { categoryName } = useParams(); //get category name from url
  const filterdBooks = bookList.filter(book => book.categories.includes(categoryName))

  return (
    <div className='p-4'>
      <h2 className='text-center text-2xl text-black font-bold mb-4'>
        {categoryName}
      </h2>
      <ul>
        {filterdBooks.map((book) => 
          <li key={book.id}>
            <BookCard book = {book}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default BookByCategory;