import React, { useState, useEffect } from 'react';
import Loading from './loading';


const SubjectPage = ({ match }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
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

  if (isLoading) {
    return <div className="my-5"><Loading/></div>
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Top 10 Books in {match.params.subject}</h2>
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
  );
};

export default SubjectPage;
