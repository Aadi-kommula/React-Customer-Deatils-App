// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Pagination from './Pagination';
import Sort from './Sort';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='p-3 mb-2 bg-secondary text-white'>
      <h1 className='text-center m-4 text-uppercase blockquote'>Customer Details</h1>
      <Search data={data} setData={setData} />  
      <Sort data={data} setData={setData} />            
      <Pagination data={data} setData={setData} />
    </div>
  );
};

export default App;
