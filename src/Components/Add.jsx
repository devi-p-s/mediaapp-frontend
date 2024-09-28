import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadvideoAPI } from '../../service/allAPI';


function Add( {setUploadvideoupdates}) {
  const [uploadvideo, setUploadvideo] = useState({
    id: "", caption: "", url: "", link: ""
  });
  const getYoutubelink = (e) => {
    const { value } = e.target;
    if (value.includes("v=")) {
      let vid = value.split("v=")[1].slice(0, 11);
      console.log(`https://www.youtube.com/embed/${vid}`);
      setUploadvideo({ ...uploadvideo, link: `https://www.youtube.com/embed/${vid}`});
    } else {
      setUploadvideo({ ...uploadvideo, link: ''});
    }
  };
  

  const handleAdd = async () => {
    const { id, caption, url, link } = uploadvideo;
    if (!id || !caption || !url || !link) {
      alert("please fill missing fields");
    } else {
      const result = await uploadvideoAPI(uploadvideo);
      console.log("Request Data:", result); 
      
      // Moved this if block inside else after `result` is defined
      if (result.status >= 200 && result.status <300) {
        handleClose();
        alert("successful");
        setUploadvideo({ id: "", caption: "", url: "", link: "" });
        setUploadvideoupdates(result.data)
      } else {
        console.log(result.message);
        alert("Upload failed: " + result.message || "Unknown error" );
      }
    }
  };

 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload Videos</h5>
        <button className='btn' onClick={handleShow}><i className="fa-solid fa-upload fa-beat text-danger"></i></button>
      </div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="Video ID" className="mb-3">
            <Form.Control type="text" placeholder="Video ID" onChange={(e) => setUploadvideo({ ...uploadvideo, id: e.target.value })} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTitle" label="Video Title">
            <Form.Control type="text" placeholder="Video Title" onChange={(e) => setUploadvideo({ ...uploadvideo, caption: e.target.value })} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
            <Form.Control type="text" placeholder="Image URL" className='mt-2' onChange={(e) => setUploadvideo({ ...uploadvideo, url: e.target.value })} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="YouTube Video URL">
            <Form.Control type="text" placeholder="YouTube Video URL" onChange={getYoutubelink} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
