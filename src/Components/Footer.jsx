import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div className='w-100%'>
       <MDBFooter bgColor='info' className='text-center text-dark '  >
     
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-light'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:"none"}}>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:"none"}}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:"none"}}>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:"none"}}>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-light' style={{textDecoration:"none"}}>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Useful links</h6>
              <div style={{textDecoration:"none"}}>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:"none"}}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:"none"}}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:"none"}}>
                  Help
                </a>
              </p>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
             
                <input id="" type="text" placeholder='Enter your Email' />
                <button style={{backgroundColor:'red',borderRadius:"5px", margin:"5px"}}>subscribe</button>
              </p>
              <p>
              <div style={{color:"white"}}>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
              </p>
  
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
