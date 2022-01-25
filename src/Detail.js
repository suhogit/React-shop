import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;


// class Detail2 extends React.Component {

//   componentDidMount(){

//   }

//   componentWillUnmount(){

//   }

// }





function Detail (props) {
  
  let [alert, alert변경] = useState(true);


  useEffect(()=>{

    // axios.get()  //Detail 컴포넌트 등장 & 업데이트시 실행할 코드 []를 넣어줘서 첫 로드할때만 ajax로 데이터를 가져옴


    let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);

    return ()=>{ clearTimeout(타이머) }
//return 지금은 별 문제없는 것 같지만 코드가 길어지거나 꼬이면 남아있는 타이머 때문에 이상한 현상이 일어날 수 있습니다.
//그래서 컴포넌트가 사라질 때 타이머를 없애는 코드도 추가함수를 추가하면 컴포넌트가 사라질 때 특정 코드를 실행할 수 있음

  }, []);     //,[] 은 그냥 컴포넌트 로드때만 한번 딱 실행하고 싶은 코드를 담을 때 쓸 수 있는 일종의 트릭쇼입니다.


    let {id} = useParams();
    let history = useHistory();

    let 찾은상품 = props.shoes.find(function(상품){
      return 상품.id == id
    });

    return (
      <div className="container">
        <박스>
            <제목 className="red">Detail</제목>
        </박스>


        {
          
          alert === true 
          ? (<div className="my-alert2">
              <p>재고가 얼마 남지 않았습니다</p>
            </div>)
          : null

        }


      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p> <br />


          <Info 재고={props.재고}></Info>


          <button className="btn btn-danger" onClick={ ()=>{ props.재고변경([9,11,12]) } }>주문하기</button> 
          &nbsp;
          <button className="btn btn-danger" onClick={()=>{
              history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>
  </div> 
    )
  }


  function Info (props){
    return (
      <p>재고 : {props.재고[0]}</p>
    )
  }


export default Detail;