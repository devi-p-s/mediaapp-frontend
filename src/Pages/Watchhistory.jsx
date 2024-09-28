import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deletehistoryAPI, gethistoryAPI } from '../../service/allAPI';

function Watchhistory() {
  const [history, setHistory] = useState([]);

  const gethistory = async () => {
    const result = await gethistoryAPI();
    if (result.status === 200) {
      setHistory(result.data);
    } else {
      console.log("API failed");
      console.log(result.message);
    }
  };

  useEffect(() => {
    gethistory();  // Corrected function call
  }, []);

  
  const removehistory=async(id)=>{
    await deletehistoryAPI(id)
    gethistory()
  
  }
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h2>Watch-history</h2>
        <Link style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '25px' }} to={'/home'}>
          Back to home<i className="fa-solid fa-arrows-rotate"></i>
        </Link>
      </div>

      <Table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>caption</th>
            <th>URL</th>
            <th>timestamp</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length > 0 ? history.map((video, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{video.caption}</td>
                <td><a href={video.link} target='_blank' rel='noopener noreferrer'>{video.link}</a></td>
                <td>{video.timestamp}</td>
                <td><button onClick={() => removehistory(video?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
            )) : <tr><td colSpan="5">Nothing to display</td></tr>
          }
        </tbody>
      </Table>
    </>
  );
}

export default Watchhistory;
