import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import emptyCoverIcon from '../assets/question-sign.png';

function BookPreview() {
  const {state} = useContext(GlobalContext)
  return (
    <div className="bg-slate-300 p-4  mt-4 rounded-md flex">
      {!state.img ? 
        <div className="border-2 border-dashed p-4 flex flex-col
          items-center justify-center max-w-[50%] text-center h-[180px]">
          <img 
            className="h-10"
            src={emptyCoverIcon} alt="no cover" />
          <p>No Cover provided ! </p>
        </div>
        :
        <img src={state.img} alt={`${state.title} cover`}/>
      } 
      <div>
      <div className="ml-2 text-center flex-1">
        <h2 className="text-xl">
          {state.title}
        </h2>
        <p>{state.author}</p>
        <ul className="text-blue-400 flex flex-col">
          {state.categories.map((category) =>
            <li
              key={category}>
              {category}
            </li>
          )}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default BookPreview;