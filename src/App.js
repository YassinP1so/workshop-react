
import { Button, Card, CardGroup, Carousel, Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    {/* NavBar-Start */}
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      {/* Inputs */}
      <InputGroup className="mb-3">
      <Form.Control aria-label="First name" className='loula'/>
      <Form.Control aria-label="Last name" className='thenya'/>
    </InputGroup>
    {/* Buttons */}
      <Button className='btn' variant="outline-success">Login</Button>{' '} 
      <Button className='btnn' variant="outline-success">Sign in</Button>{' '}
    </Container>
  </Navbar>
  {/* NavBar Ends */}
  {/* Slides Start */}
  <Carousel className='crsl'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ff/c3/8d/ffc38d9bce22d7a9eaa07b890e3af1a2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/110/1104327.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=" https://wallpapers.com/images/featured/a8lzrpdzi7ffija2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* Slides Ends */}
    <section>
    {/* Cards  */}
      <div className='container'>
      <h1>Cards</h1>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/61/c3/e9/61c3e9825570bc17e065e716f27321ce.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://theindianwire.com/wp-content/uploads/2019/08/Ford-Mustang-GT-hd.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_UGPRNaRnvB4R7D-siljIuDKEQyxavledQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    </section>
    {/* Cards  */}
    </div>
    
  );
}

export default App;
