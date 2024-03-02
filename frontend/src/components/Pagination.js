
import React, { useState } from 'react';

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = data.slice(startIndex, endIndex);

  return (
    <div>     
      <table className='table  table-bordered table-hover mt-2 mb-2'>
        <thead className='table-dark'>
          <tr>
            <th>Sno</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.sno}</td>
              <td>{record.customer_name}</td>
              <td>{record.age}</td>
              <td>{record.phone}</td>
              <td>{record.location}</td>
              <td>{record.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of {data.length} entries
      </p>
      <div>
        <button
          className='btn btn-success m-2 btn-sm'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        <span>{currentPage}</span>
        <button
          className='btn btn-success m-2 btn-sm'
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>

  );
};

export default Pagination;
