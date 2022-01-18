import React, { useState } from 'react';
import { Button,Jumbotron,Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Data from './data.js';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      <Jumbotron className="background">
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

<div className="container">
  <div className="row">
    <Card shoes={shoes[0]}/>
    <Card shoes={shoes[1]}/>
    <Card shoes={shoes[2]}/>
  </div>
</div>
    </div>
  );
}


function Card(props){
  return(
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;
