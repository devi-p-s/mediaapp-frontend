import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Add from '../Components/Add';
import View from '../Components/Views';
import Category from '../Components/Category';

function Home() {
  const [uploadvideoupdates, setUploadvideoupdates] = useState({});
  const [dropvideoresponse, setDropvideoresponse] = useState({});

  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className='add-videos'>
          <Add setUploadvideoupdates={setUploadvideoupdates} />
        </div>
        <Link
          to='/watch-history'
          style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }}
        >
          Watch History <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className='all-videos col-lg-9'>
          <h1>All videos</h1>
          <View uploadvideoupdates={uploadvideoupdates} setDropvideoresponse={setDropvideoresponse} />
        </div>
        <div className="all-videos col-lg-3">
          <Category dropvideoresponse={dropvideoresponse} />
        </div>
      </div>
    </>
  );
}

export default Home;
