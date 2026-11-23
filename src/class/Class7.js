import React from 'react'

function Class7() {
  return (
    <>
    <h3 className='title3'>컴포넌트의 개념과 사용법</h3>
    <h4 className='title4'>1. 컴포넌트의 정의</h4>
    <ul className='list01'>
        <li>재사용 가능한 ui콘텐츠이며 단순한 템플릿 이상의 구현체</li>
        <li>컴포넌트는 부모에게서 '값'을 받아와서 보여주거나 사용할 수 있다. =props(속성)</li>
        <li>컴포넌트 자신이 사용할 값을 정의하고 필요할 때 업데이트 = state(상태관리)</li>
        <li>ui에서 보여줘야하는 값이 바뀌면 dom에 변화를 줌</li>
    </ul>
    <p>#자손 컴포넌트를 부모가 사용하고자 할 때(연결방법)

    {/*
    <pre>
    //es6문법
    import 컴포넌트명 from '파일경로';
    </pre>
    */} 
    </p>
    
    <p>#컴포넌트 jsx문법으로 불러오기
        {/* <pre> <컴포넌트 명/> </pre> */}
    </p>
    <p>class형 컴포넌트 작성시 render(){} 함수 작성</p>
    <pre>
        {/* render(){
        ui를 구현해주는 함수로서 이곳에 리액트 내용을 작성함} */}
    </pre>
    <p> *return 문은 jsx문법 사용하여 추후 바벨(컴파일러)이 js코드로 변환시켜줄 값을 입력하는 영역</p>

    <pre>
        {/* return{
        값입력};
        */ }
    </pre>
    export 컴포넌트명: 다른 js파일에서 부모 컴포넌트가 불러올 수 있도록 미리 내보내기를 해주는 구문
        <pre>export default 컴포넌트명;</pre>
 
    
    <h4 className='title4'>컴포넌트의 종류 - 함수형, 클래스형</h4>
    <p>class형 컴포넌트는 'java'문법에서 가져온 방법으로 class '컴포넌트명'으로 시작하며 함수형 문법은 '자바스크립트'문법에서 가져온 방법으로서 프론트엔드 개발자가 사용하기에 매우 익숙한 문법임. 두가지 모두 차이점이 있지만 함수형 문법이 현재 많이 사용됨.</p>

    </>
  )
}

export default Class7