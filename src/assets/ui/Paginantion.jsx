import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxVisiblePages = 5; // Maximum number of visible page numbers

  // Determine the start and end page numbers
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust startPage if endPage is at the end
  if (endPage === totalPages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex justify-center items-center  bg-gray-200 rounded-full disabled:opacity-50"
      >
        <FaArrowLeft />
      </button>
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`w-10 h-10 flex justify-center items-center rounded-full ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-2 py-1 ">...</span>}
        </>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`w-10 h-10 flex justify-center items-center  rounded-full ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {number}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 py-1 ">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`w-10 h-10 flex justify-center items-center  rounded-full ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex justify-center items-center  bg-gray-200 rounded-full disabled:opacity-50"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;