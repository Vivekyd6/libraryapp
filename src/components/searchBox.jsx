import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      onSearch(searchTerm);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{ borderRadius: '0.25rem 0 0 0.25rem', marginRight: '0.5rem' }}
        />
        <button type="submit" className="btn btn-outline-secondary" style={{ marginRight: '0.5rem' }}>
          Search
        </button>
        <button type="button" className="btn btn-outline-secondary" onClick={handleClear} style={{ marginRight: '0.5rem' }}>
          Clear
        </button>
      </div>
    </form>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;
