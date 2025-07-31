import { useEffect, useState } from 'react';
import bookList from '../../books';
import categoriesIcon from '../assets/categories.gif';
import { Link } from 'react-router-dom';

function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const uniqueCategories = [];
    bookList.forEach((book) => {
      book.categories.forEach((category) => {
        if (!uniqueCategories.includes(category)) {
          uniqueCategories.push(category)
        }
      }) 
    })
    setCategoriesList(uniqueCategories)
  }, [])

  return (
    <div className='p-4'>
      <div className='flex items-center gap-4 mb-4'>
        <img src={categoriesIcon} alt="icon" className='h-10' />
        <h1 className="text-2xl text-center">Categories</h1>
      </div>
      <ul className='flex flex-col'>
        {categoriesList.map((category) => 
          <Link 
            to={`/categories/${category}`}
            key={category}
            className='bg-slate-100 p-4 text-black rounded-md text-center text-xl mb-4
              font-bold'
          >
            {category}
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Categories;