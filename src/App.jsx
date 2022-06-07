import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';

const App = () => {
  const URL='https://jsonplaceholder.typicode.com/posts';
  const [data, setData]=useState([]);

  useEffect(()=>{
    getData();
  }, [])

  function getData(){
    fetch(URL)
    .then(request => request.json())
    .then(result => setData(result))
    .catch(err => console.log('message' + err))
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="main ">
          <Routes>
            <Route path='/' element={<NewsList data={data} />} />
            <Route path='/news' element={<NewsList data={data} />} />
            <Route path='/news/:id' element={<NewsItem />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;