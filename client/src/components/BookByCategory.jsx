import { useParams } from 'react-router-dom'; /* access URL parameters defined in route paths. */
import { GlobalContext } from '../context/GlobalContext';
import { BooksContext } from '../context/BooksContext';
import BookCard from './BookCard';
import { useContext } from 'react';
import NewBookForm from './NewBookForm';

function BookByCategory() {
  const {showForm, currentBook} = useContext(GlobalContext);
  const {booksData} = useContext(booksData);
  const { categoryName } = useParams(); //get category name from url
  const filterdBooks = booksData.filter(book => book.categories.includes(categoryName))

  return (
    <div className='p-4'>
      <h2 className='text-center text-2xl text-black font-bold mb-4'>
        {categoryName}
      </h2>
      {filterdBooks.length > 0 ? 
      (
        <ul className='sm:grid sm:grid-cols-2 md:grid-cols-3'>
        {filterdBooks.map((book) => 
          <li key={book.id}>
            <BookCard book = {book}/>
          </li>
        )}
      </ul>
      ) :
      <p className='text-center'> No books added yet:(</p>
      }
      {showForm && 
        <div>
          <div className='fixed inset-0 bg-black/75 z-10 p-4 '></div>
          <div className='absolute p-4 top-10 rounded-2xl z-20'>
            <NewBookForm currentBook = {currentBook}/>
          </div>  
        </div>
      }
    </div>
  )
}

export default BookByCategory;