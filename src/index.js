import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';


let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  
  if (액션.type === 'alert닫기'){ 
    state = false;  
    return state;
  } else {
  return state
  }

}




let 초기값 = [
  { id : 0, name : '멋진신발', quan : 2 },
  { id : 1, name : '멋진신발2', quan : 1 }
]; 


function reducer(state = 초기값, 액션) {     // 이럴 경우 데이터를 이렇게 수정해주셈~ reducer에서 state데이터의 수정방법을 미리 정의해놔야함
  if ( 액션.type === '항목추가' ) {

    let copy = [...state];
    copy.push(액션.데이터); // dispatch 할 때 실어보냈던 데이터가 나온걸 state에 추가
    return copy

  } else if ( 액션.type === '수량증가' ) {

    let copy = [...state];   //사본을 만들고 카피해서 사본을 수정함 0번째 quan1증가
    copy[0].quan++;

    return copy    //'수량증가'라는 데이트 요청이 들어오면 데이터 찾아서 복사본에 수량을 증가 시켜서 퉤 뱉어주삼
  } else if ( 액션.type === '수량감소' ) {

    let copy = [...state];
    copy[0].quan--;
    return copy
  
  } else {   // 요청같은게 안들어오면 초기값(state) 뱉어주삼
    return state
  }
  
}


let store = createStore(combineReducers({reducer, reducer2}) )  // state여러개 보관한 리듀셔 여러개 합치는 문법 combineReducers




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
