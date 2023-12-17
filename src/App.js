import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from './images/imagen_carusel1.jpg';
import imagen2 from './images/imagen_carusel2.jpeg';
import imagen3 from './images/imagen_carusel3.jpeg';


function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="menu">
        <Container>
          <Navbar.Brand href="#home">Brayan's Literary Threads </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu_libro_usuario">
              <Nav.Link href="#home">Iniciar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        
        <Carousel fade>
          <Carousel.Item interval={1000}>
            <imagen1 text="First slide" /> 
              <img src={ imagen1 } className='d-block w-100 imagen_carrusel' alt="..."/>        
            <Carousel.Caption>
              <h3>Donde cada página es una nueva aventura literaria.</h3>
              <p>En nuestra página, cada libro es una puerta a un universo único.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <imagen2 text="Second slide" />
            <img src={ imagen2 } className='d-block w-100 imagen_carrusel' alt="..."/>    
            <Carousel.Caption>
              <h3>Palabras que inspiran, historias que transforman.</h3>
              <p>Creemos en el poder de la lectura para enriquecer tu mente y alimentar tu alma.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <imagen3 text="Third slide" />
            <img src={ imagen3 } className='d-block w-100 imagen_carrusel' alt="..."/>    
            <Carousel.Caption>
              <h3>Libros que crean puentes entre mundos.</h3>
              <p>Explora la diversidad literaria y expande tus horizontes.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </main>

      <footer className="bg-dark text-light mt-0.01">
      <Container className="text-center py-3">
        <p>&copy; 2023 Brayan's Literary Threads. Proyecto para fines demostrativos.</p>
        <p>Brayan Steven Horta Quevedo</p>
      </Container>
    </footer>
    </div>
  );
}

export default App;
