import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Search = ({ data, setData }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const filteredData = data.filter(
      (row) =>
        row.customer_name.toLowerCase().includes(query.toLowerCase()) ||
        row.location.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  return (
  
    <div className='input-group mb-3'>
      <input className="form-control m-2" 
        type="text"
        placeholder="Search by name or location"
        value={query}        
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
      <button className='btn btn-outline-secondary btn-warning m-2' onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
