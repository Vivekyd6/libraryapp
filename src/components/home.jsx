import React, { useState } from 'react';
import SearchBox from './searchBox';
import SearchResults from './searchResults';
import TrendingSubjects from './trendingSubjects';
import Loading from './loading';
import Pagination from './pagination';

import { useHistory } from "react-router-dom";

import Footer from './footer';
const Home = () => {


  const history=useHistory()

  // eslint-disable-next-line no-unused-vars
  const [subjects, setSubjects] = useState([
    { key: 'maths', name: 'Mathematics', path: 'subjects/mathematics' },
    { key: 'science', name: 'Science', path: 'subjects/science' },
    { key: 'literature', name: 'Literature', path: 'subjects/literature' },
    { key: 'history', name: 'History', path: 'subjects/history' },
    { key: 'chemistry', name: 'Chemistry', path: 'subjects/chemistry' },
  ]);

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const perPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const onSubjectClick = (subject) => {
    console.log(`Clicked on ${subject}`);
    // Do something else with the clicked subject
    history.push(`/${subject}`)
  };


  const handleSearch = async (searchTerm) => {
    if (searchTerm === '') {
      setSearchResults([]);
      return;
    }

    const searchUrl = `http://openlibrary.org/search.json?q=${searchTerm}`;

    try {
      setIsLoading(true);
      const response = await fetch(searchUrl);
      const data = await response.json();
      setSearchResults(data.docs);
      setCurrentPage(1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const currentItems = searchResults.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const totalPages = Math.ceil(searchResults.length / perPage);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  
  return (
    <>
      <div
        className="container-fluid bg-light"
        style={{ minHeight: '100vh', padding: '1rem 0' }}
      >
        <div className="container bg-white py-3">
          <h1 className="text-center mb-4">Welcome to My Library</h1>
          <div className="row">
            <div className="col-3">
              <div className="container border py-3">
              <TrendingSubjects subjects={subjects} onSubjectClick={onSubjectClick} onSearch={handleSearch} />
              </div>
            </div>

            <div className="col-9">
                <div className="container border py-3">
                <div className="row">
                  <div className="col-md-8">
                    <SearchBox onSearch={handleSearch} />
                  </div>
                </div>
                </div>
                <div className="container py-3">
                <div className="row mt-4">
                  <div className="col-md-12">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <SearchResults results={currentItems} />
                    )}
                    {totalPages > 1 && (
                      <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        handlePrevClick={handlePrevClick}
                        handleNextClick={handleNextClick}
                      />
                    )}
                  </div>
                </div>
                </div>
            </div>
          </div>
          <div className="mb-2 my-5">
          <Footer/>
          </div>
        </div>
  
      </div>
    </>
  );
};

export default Home;
