import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { AddhistoryAPI, deleteVideoAPI } from '../../service/allAPI';

function Videocard({ video, setDeleteresponse, insidecategory }) { // Add 'insidecategory' as a prop
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    const { caption, link } = video;
    let today = new Date(); // Add this line to define 'today'
    let timestamp = new Intl.DateTimeFormat('en-US', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(today);
    let videoHistory = { caption, link, timestamp };
    await AddhistoryAPI(videoHistory);
  };

  const removeVideo = async (id) => {
    await deleteVideoAPI(id);
    setDeleteresponse(true);
  };

  const dragStarted = (e, id) => {
    console.log("drag started....vdoid" + id);
    e.dataTransfer.setData("videoid", id);
  };

  return (
    <div>
      <Card draggable onDragStart={(e) => dragStarted(e, video?.id)}>
        <Card.Img variant="top" src={video.url} onClick={handleShow} style={{ height: '15rem' }} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <>
              <h5>{video.caption}</h5>

              {!insidecategory && (
                <button onClick={() => removeVideo(video?.id)} className='btn'>
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              )}
            </>
          </Card.Title>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${video.link}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Videocard;
