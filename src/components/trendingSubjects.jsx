import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const TrendingSubjects = ({ subjects, onSubjectClick, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const history=useHistory();
  const handleSearch = async () => {
    if (searchTerm === '') {
      return;
    }
      history.push(`subjects/${searchTerm}`)
    
  };

  return (
    <>
      <h2 style={{ marginBottom: '1rem' }}>Trending Subjects</h2>
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          <tr style={{ borderTop: '1px solid #ddd' }}>
            <td style={{ padding: '0.5rem 1rem' }}>
              <div className="input-group outline">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search subjects"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-secondary mx-1" style={{ marginRight: '0.5rem' }} onClick={handleSearch}>
                  Search
                </button>
              </div>
            </td>
          </tr>
          {subjects.map((subject) => (
            <tr key={subject.key} style={{ borderTop: '1px solid #ddd' }}>
              <td style={{ padding: '0.5rem 1rem' }}>
                <Link to={subject.path} style={{ color: '#333', textDecoration: 'none' }} onClick={() => onSubjectClick(subject)}>
                  {subject.name}
                </Link>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </>
  );
};

export default TrendingSubjects;
