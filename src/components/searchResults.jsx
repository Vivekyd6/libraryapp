import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="border ">
      {results.length > 0 && (
        <table className="table table-striped table-hover my-3">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author(s)</th>
              <th scope="col">Year</th>
              <th scope="col">Publisher</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.key}>
                <td>
                  <a
                    href={`https://openlibrary.org${result.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {result.title}
                  </a>
                </td>
                <td>{result.author_name ? result.author_name.join(', ') : '-'}</td>
                <td>{result.first_publish_year || '-'}</td>
                <td>{result.publisher ? result.publisher.map(pub => pub.substring(0, 20)).join(', ') : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchResults;
