import ZorbaCover from '../assets/zorba.jpg';
import duneCover from '../assets/dune.jpg';

const bookList = [
  { 
    id: crypto.randomUUID(),
    title: 'Zorba the greek',
    author: 'Nikos Kazantzakis',
    categories: ['novel', 'fiction'],
    cover : ZorbaCover
  },
  {
    id: crypto.randomUUID(),
    title: 'Dune',
    author: 'Frank Herbert',
    categories: ['novel', 'fiction', 'science fiction'],
    cover: duneCover
  }
]

export default bookList;