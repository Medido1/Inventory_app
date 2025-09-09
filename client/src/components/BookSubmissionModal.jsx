import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIContext";
import verifiedIcon from "../assets/verified.gif";  
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function BookSubmissionModal({setShowNewBookForm}) {
  const {isBookModalOpen, setBookModalOpen} = useContext(UIContext);
  
  // Close on Escape
  useEffect(() => {
    if (!isBookModalOpen) return;
    function onKey(e) {
      if (e.key === "Escape") setBookModalOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isBookModalOpen, setBookModalOpen]);

  if (!isBookModalOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/75 z-10 p-4 flex items-center justify-center "
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg
          w-full top-1/2 left-1/2 sm:max-w-[500px] ">
          <div className="flex items-center">
            <img className="h-10" src={verifiedIcon} alt="verified icon" aria-hidden="true" />
            <p>New Book added!!</p>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => {
                setShowNewBookForm(false)
                setBookModalOpen(false)
              }}
              className="bg-gray-200 px-4 py-2 rounded-lg">
              Close
            </button>
            <Link
              onClick={() => {
                setShowNewBookForm(false)
                setBookModalOpen(false)
              }}
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

