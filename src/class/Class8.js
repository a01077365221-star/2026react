import React from 'react'
import Grand from './Grand'

function Class8() {
  return (
    <>
    <h3 className='title3'>1. 리액트 props개념과 사용</h3>
    <ul className='list01'>
        <li>props : properties의 줄임말</li>
        <li>부모 컴포넌트가 자식 컴포넌트에게 전달해주는 값</li>
        <li>리액트에서는 props값을 읽기위해서만 사용하고, 값을 변경x</li>
        <li>자식요소에 전달할 값이 없는 경우, 기본값이 출력되도록 설정. defaultProps=속성 :값 or 함수형 컴포넌트일 경우 매개변수에 초기값 선언 예)name1: '000'</li>
        <li>비구조화 할당 방식(es6문법)으로 속성 정의 : render()함수 바로 아래 const name, age, hobby = this.props;로 선언하여 적용할 수 있다.</li>
        <li>클래스형 컴포넌트롤 제작하고 함수형 컴포넌트로 전환하여 출력하기 - 속성을 매개변수 처리해야..</li>
        <li>함수형 컴포넌트 제작시 화살표 함수를 사용하고 const 변수명으로 작성할 수 있다.</li>
    </ul>

    <hr />

    <Grand />



    
    </>
  )
}

export default Class8