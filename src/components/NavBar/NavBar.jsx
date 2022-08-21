import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'



const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <Navbar expand="lg" className='nav' >
        <Container >
          <Navbar.Brand href="/" style={{ color: 'black' }}>
            <img style={{ width: '3rem' }} src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="/" style={{ color: 'black' }}>Home</Nav.Link>
              {user ?
                <Nav.Link onClick={handleLogout} style={{ color: 'black' }}>Log Out</Nav.Link>
                :
                <>
                  <Nav.Link href="/login">
                    Log In
                  </Nav.Link>
                  <Nav.Link href="/login">
                    Log In
                  </Nav.Link>
                </>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
