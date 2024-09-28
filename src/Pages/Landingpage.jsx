import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'; // Assuming you're using React-Bootstrap
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigate = useNavigate(); // Use it here
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ fontSize: '40px' }}>Welcome to <span className='text-warning'>Media Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
          <button onClick={() => navigate('/home')} className='btn btn-info mt-4'>GET Started</button> {/* Correct use here */}
        </Col>
        <Col lg={5}>
          <img src="https://th.bing.com/th/id/OIP.B2DWu1xFj96Uin0OHDVvAgHaEK" alt="" />
        </Col>
        <Col></Col>
      </Row>
      {/* Card Section */}
      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-row">
        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
          <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/1I_jiI9wXHUAAAAC/music-visualizer.gif" />
          <Card.Body>
            <Card.Title className='text-primary'>Managing videos</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet consectetur...</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
          <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/1I_jiI9wXHUAAAAC/music-visualizer.gif" />
          <Card.Body>
            <Card.Title className='text-primary'>Managing videos</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet consectetur...</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
          <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/1I_jiI9wXHUAAAAC/music-visualizer.gif" />
          <Card.Body>
            <Card.Title className='text-primary'>Managing videos</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet consectetur...</Card.Text>
          </Card.Body>
        </Card>
        
        {/* Additional Cards */}
      </div>
      {/* Video Section */}
      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className="text-warning">Simple, powerful & fast</h4>
          <h6 className="mb-5 mt-3">Play everything...</h6>
        </div>
        <div className='video col-lg-7'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XXYlFuWEuKI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
