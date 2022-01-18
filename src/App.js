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
    {
      shoes.map((a,i) => {
        return <Card shoes={a} i={i} key={i}/>     /* {shoes[i]/} 랑 같은거임 , 반복문 돌리면 key 꼭 써야함 */
      })
    }
  </div>
</div>
    </div>
  );
}


function Card(props){
  return(
    <div className="col-md-4">
      <img src= { 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%"/>
      {/* ▲ props 전송하시려면

        1. i={i} 이렇게 전송해주시고 2. props.i 이렇게 갖다쓴다고 배워봤습니다.

        근데 i는 0,1,2가 된댔는데 우리가 필요한 숫자는 1,2,3 이잖아요

        그래서 (props.i + 1) 이런 변수를 집어넣은 것입니다. */}
        
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;
