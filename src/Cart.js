import React, { useEffect, memo } from "react";
import {Table} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props){

    let state = useSelector((state) => state);
    console.log(state.reducer)

    let dispatch = useDispatch();  //useSelector, useDispatch import해면  state를 props화 해주는 함수 어쩌고를 안하고 쉽게 리덕스 안에 있는 데이터들 꺼내 쓸수 있음

    return(
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((a,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{ a.id }</td>
                                    <td>{ a.name }</td>
                                    <td>{ a.quan }</td>
                                    <td>
                                        <button onClick={ ()=>{ dispatch({ type : '수량증가', 데이터 : a.id}) } }>+</button> {/* 액션 파라미터 */}
                                        {/* 데이터 수정하고싶으면 reducer로 수정하는 방법 만들고 dispatch()로 수정하셈 */}
                                        <button onClick={ ()=>{ dispatch({ type : '수량감소', 데이터 : a.id }) } }>-</button>
                                    </td> 

                                     {/* 데이터 수정요청을 할 땐 props.dispatch({ type : ??? }) */}
                                </tr>
                                )
                            })
                        }
                </tbody>
            </Table>

                { props.alert열렸니 === true
            ? (<div className="my-alert2">
                <p>지금 구매하시면 20% 할인</p>
                <button onClick= { ()=>{ props.dispatch({type : 'alert닫기'}) }}>닫기</button>
                </div> )
            : null 
            }
            <Parent 이름="수호1" 나이="20"></Parent>
    </div>
    )
}


/////////////////////////재랜더링 막는 memo //////////////////////////
function Parent(props){
    return(
        <div>
            <Child1 이름={props.이름}></Child1>
            <Child2 나이={props.나이}></Child2>
        </div>
    )
    
}

function Child1(){
    useEffect(()=>{ console.log('렌더링됨1') });
    return <div>1111</div>
}
let Child2 = memo(function(){
    useEffect(()=>{ console.log('렌더링됨2') });
    return <div>2222</div>
});

//props가 매우 방대하면 오히려 손해일 수 있음
//mome컴포넌트는 헛되게 재렌더링을 안시키려고 기존 props와 바뀐 props를 비교하는 연산이 추가로 진행됨
//props가 크고 복잡하면 이거 자체로도 부담이 될 수 있음
//쓸지말지 평가하려면 리액트 개발자도구에서 렌더링속도를 측정해볼 순 있으나
// 그것마저 귀찮으니 쪼끄만한 사이트를 만들거나 컴포넌트 내부에 있는 html양이 매우 적을 경우엔 memo는 쓰지말도록!



////////////////////////////////////////////////////////////////////







// function state를props화(state){
//     return {
//         state: state.reducer,
//         alert열렸니 : state.reducer2
//     }
// }

// export default connect(state를props화)(Cart)

export default Cart;