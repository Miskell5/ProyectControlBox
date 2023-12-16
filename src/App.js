import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="menu">
        <Container>
          <Navbar.Brand href="#home">Brayan's Literary Threads </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu_libro_usuario">
              <Nav.Link href="#home">Libros</Nav.Link>
              
              <NavDropdown title="Usuario" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Perfil de Usuario</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
