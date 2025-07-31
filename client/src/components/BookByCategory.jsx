import { useParams } from 'react-router-dom'; /* access URL parameters defined in route paths. */
import { GlobalContext } from '../context/GlobalContext';
import BookCard from './BookCard';
import { useContext } from 'react';

function BookByCategory() {
  const {booksData} = useContext(GlobalContext);
  const { categoryName } = useParams(); //get category name from url
  const filterdBooks = booksData.filter(book => book.categories.includes(categoryName))

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