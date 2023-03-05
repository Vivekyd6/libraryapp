import React from 'react';

const Pagination = ({ totalPages, currentPage,setCurrentPage, handlePrevClick, handleNextClick }) => {
    return (
        <div className="d-flex justify-content-center my-3">
            <nav>
                <ul className="pagination">
                    {currentPage > 1 && (
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={handlePrevClick}
                            >
                                Previous
                            </button>
                        </li>
                    )}
                    {Array.from(
                        { length: totalPages },
                        (_, index) => (
                            <li key={index} className="page-item">
                                <button
                                    className={`page-link ${index + 1 === currentPage ? "active" : ""
                                        }`}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        )
                    )}
                    {currentPage < totalPages && (
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={handleNextClick}
                            >
                                Next
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
