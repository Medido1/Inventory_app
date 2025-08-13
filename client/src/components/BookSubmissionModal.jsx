import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import verifiedIcon from "../assets/verified.gif";  
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function BookSubmissionModal() {
  const {isBookModal, setBookModal} = useContext(GlobalContext);
  if (!isBookModal) return;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/75 z-10 p-4 flex items-center justify-center "
      >
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg
          w-full top-1/2 left-1/2 ">
          <div className="flex items-center">
            <img className="h-10" src={verifiedIcon} alt="verified icon" />
            <p>New Book added!!</p>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setBookModal(false)}
              className="bg-gray-200 px-4 py-2 rounded-lg">
              Add new Book
            </button>
            <Link
              to = "/books"
              className="bg-gray-200 px-4 py-2 rounded-lg">
              View Books
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BookSubmissionModal;

