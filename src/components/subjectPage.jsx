import React, { useState, useEffect } from 'react';
import TrendingSubjects from "./trendingSubjects"
import Loading from "./loading"
// eslint-disable-next-line no-unused-vars
import Pagination from './pagination';
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import subjects from "./trending.json"
import HomeButton from './backtoHome';
import Footer from './footer';

const SubjectPage= ({ match }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([])
  const onSubjectClick = (subject) => {
    console.log(`Clicked on ${subject}`);
    // Do something else with the clicked subject
    history.push(`/${subject}`)
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://openlibrary.org/subjects/${match.params.subject}.json?limit=10`
        );
        const data = await response.json();
        setBooks(data.works);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [match.params.subject]);
  return (
    <>
      <div
        className="container-fluid bg-light"
        style={{ minHeight: '100vh', padding: '1rem 0' }}
      >

        <div className="container bg-white py-3">
          <h1 className="text-center mb-4">Welcome to My Library</h1>
         <div className="mb-3 d-flex flex-row-reverse">
         <HomeButton />
         </div>
          <div className="row">
            <div className="col-3">
              <div className="container border py-3">
                <TrendingSubjects subjects={subjects} onSubjectClick={onSubjectClick} />
              </div>
            </div>

            <div className="col-9">
              <div className="container border py-3">
                <div className="row">
                  <div className="col-md-8">
                    <h2>{match.params.subject}</h2>
                  </div>
                </div>
              </div>
              <div className="container py-1">
                <div className="row mt-4">
                  <div className="col-md-12">
                    {isLoading ? (
                      <Loading />
                    ) : (

                      <div className="container my-2">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Author(s)</th>
                              <th>Published Year</th>
                            </tr>
                          </thead>
                          <tbody>
                            {books.map((book, index) => (
                              <tr key={book.key}>
                                <td>{book.title}</td>
                                <td>{book.authors.map((author) => author.name).join(', ')}</td>
                                <td>{book.first_publish_year}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                    }
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
  )
}

export default SubjectPage;