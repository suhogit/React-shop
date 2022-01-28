import React, { useContext, useState } from 'react';
import { Button,Jumbotron,Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';


import Cart from './Cart.js';


export let 재고context = React.createContext();


function App() {
  
  
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);

  return (
    <div className="App">
  <Navbar bg="light" expand="lg">
  <Navbar.Brand><Link to="/">ShoeShop</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home 테스트</Nav.Link>
      <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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



<Switch>


<Route exact path="/">
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

    <재고context.Provider value={재고}>
    <div className="row">
      {
        shoes.map((a,i) => {
          return <Card shoes={a} i={i} key={i}/>     /* {shoes[i]/} 랑 같은거임 , 반복문 돌리면 key 꼭 써야함 */
        })
      }
    </div>

    </재고context.Provider>  


    <br/>
    <button className="btn btn-primary" onClick={()=> {


      // axios.post('https://codingapple1.github.io/shop/data2.json', { id : 'test', pw : 1234})
      //   .then((result)=>{  })
      //   .catch(()=>{ })
      // 서버를 요청이 아닌 전송해야 할때는 get이 아닌 post로. 
      //POST 요청은 데이터 전송할 URL과 전송할 데이터 이 두가지 항목을 입력할 수 있음

      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result)=>{ shoes변경( [...shoes, ...result.data] ) })
      .catch(()=>{ 
        
       })    // ajax 요청에 실패했을때 담을 수 있는 코드
      
    }}>더보기</button> 
  </div>
</Route>



<Route path="/detail/:id">

  <재고context.Provider value={재고}>
      <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
  </재고context.Provider>

</Route>


<Route path="/cart">
  <Cart></Cart>
</Route>



<Route path="/:id">
  <div>아무거나적었을 때 보여주셈</div>
</Route>


</Switch>




{/* <Route path="/어쩌구" component={Modal} ></Route> */}

    </div>
  );
}


function Card(props){

  let 재고 = useContext(재고context);

  return(
    <div className="col-md-4">
      <img src= { 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%"/>
      {/* ▲ props 전송하시려면

        1. i={i} 이렇게 전송해주시고 2. props.i 이렇게 갖다쓴다고 배워봤습니다.

        근데 i는 0,1,2가 된댔는데 우리가 필요한 숫자는 1,2,3 이잖아요

        그래서 (props.i + 1) 이런 변수를 집어넣은 것입니다. */}
        
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
      <Test></Test>

    </div>
  )
}
function Test(){
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>
}

export default App;
