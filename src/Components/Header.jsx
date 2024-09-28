import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
  <>
       <Navbar className="bg-info border-none">
        <Container>
           
          <Navbar.Brand  className=' fw-bolder'>
            <Link to={'/'} style={{textDecoration:"none", color:"red"}}>
          <i class="fa-solid fa-music fa-beat"></i>
            React Bootstrap
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
   
  )
}

export default Header
