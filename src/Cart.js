import React from "react";
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
    </div>



    )
}

// function state를props화(state){
//     return {
//         state: state.reducer,
//         alert열렸니 : state.reducer2
//     }
// }

// export default connect(state를props화)(Cart)

export default Cart;