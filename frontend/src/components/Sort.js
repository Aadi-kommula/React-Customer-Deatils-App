// frontend/src/components/Sort.js

import React from 'react';

const Sort = ({ data, setData }) => {
  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) =>
      key === 'date'
        ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        : new Date(a.created_at).getHours() - new Date(b.created_at).getHours()
    );
    setData(sortedData);
  };

  return (
    <div>
      <button className='btn btn-info m-2 btn-sm' onClick={() => handleSort('date')}>Sort by Date</button>
      <button className='btn btn-info btn-sm' onClick={() => handleSort('time')}>Sort by Time</button>
    </div>
  );
};

export default Sort;
