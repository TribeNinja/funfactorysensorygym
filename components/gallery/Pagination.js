import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // set the maximum number of pages to show before and after the current page
  const maxPagesToShow = 1;

  for (let i = 1; i <= totalPages; i++) {
    // only show the first and last pages, as well as the pages within the range
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - maxPagesToShow && i <= currentPage + maxPagesToShow)
    ) {
      pageNumbers.push(i);
    }
    // add ellipsis to indicate skipped pages
    else if (pageNumbers[pageNumbers.length - 1] !== "...") {
      pageNumbers.push("...");
    }
  }

  return (
    <nav className="flex justify-center lg:justify-end">
      <ul className="flex list-none rounded-md font-semibold text-sm lg:text-base">
        {/* <li
          className={`px-1 py-1 border-2  rounded-md my-auto ${
            currentPage == 1
              ? "bg-gray-300 text-gray-100 border-gray-300"
              : "border-gray-200 text-gray-400 hover:text-ffsgPink"
          }`}
        >
          <button
            disabled={currentPage == 1 && true}
            onClick={() => onPageChange(currentPage - 1)}
            className="focus:outline-none"
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
          </button>
        </li> */}
        {pageNumbers.map((number, index) => (
          <React.Fragment key={index}>
            {number === "..." ? (
              <li className="px-2 py-2 border-2 border-gray-200 rounded-md my-auto">
                <span className="text-gray-800 ">...</span>
              </li>
            ) : (
              <li
                onClick={() => onPageChange(number)}
                className={`px-2 lg:px-3 py-2 mx-1 my-auto ${
                  currentPage === number
                    ? "text-ffsgPink border-2 border-ffsgPink rounded-md"
                    : "text-gray-800 border-2 border-gray-200 rounded-md cursor-pointer"
                }`}
              >
                <a className="hover:text-ffsgPink">{number}</a>
              </li>
            )}
          </React.Fragment>
        ))}
        {/* <li
          className={`px-1 py-1 border-2 rounded-md my-auto ${
            currentPage == totalPages
              ? "bg-gray-300 text-gray-100 border-gray-300"
              : "border-gray-200 text-gray-400 hover:text-ffsgPink"
          }`}
        >
          <button
            disabled={currentPage == totalPages && true}
            onClick={() => onPageChange(currentPage + 1)}
            className="focus:outline-none "
          >
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Pagination;
