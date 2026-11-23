import React from 'react'
import Counter1 from './Counter' //클래스형 컴포넌트
import Counter2 from './Counter2' //함수형 컴포넌트
import Kullysub from './Kullysub'

function Class9() {
  return (      
    <>
    <h3 className='title3'>2. State의 정의와 활용</h3>
    <ul className='list01'>
        <li>부모가 내려주는 값이 아닌, 컴포넌트 자신이 어떠한 값을 관리하고자 할 때 사용한다.</li>
        <li>클래스(class)형 컴포넌트는 state를 바로 사용가능</li>
        <li>함수(function)형 컴포넌트는 useState() 함수를 사용해야함.- 리액트 hook이라함.</li>
        <li>리액트는 제이쿼리와는 달리 dom을 직접 가져와서 조작하는 것이 아니기 때문에, 유동적으로 변화되는 값은 모두 state로 관리해야 한다고 보면 됨.</li>
    </ul>

    <p>1. 자식컴포넌트에서 유동적으로 변한 값을 state로 선언합니다.</p>
    <p>2. setState()함수는 'state'값을 변경해주는 함수로서 내부적으로 상태를 변경하고, 변경된 값에 맞춰 화면을 다시 그림.
        <br />작성법
        <br />
        const [상태값, 상태값 변경함수] = useState(초기값);
    </p>
    <p>3. jsx문법에서는 반드시 대,소문자 확인을 해야합니다.</p>
    <br/>
    <dl>
        <dt><strong>*React Hooks소개</strong></dt>
        <dd>Hooks는 리액트 16.9버전부터 추가되었습니다.</dd>
        <dd>Hooks가 나온것은 함수 컴포넌트가 리액트의 몇가지 기능에 접근할 수 없었던 것을 접근하게 해주기 위해서입니다.</dd>
        <dd>Hooks는 React의 함수 컴포넌트 내에서만 호출할 수 있습니다.</dd>
        <dd>Hooks를 사용하는 이유는 state 및 라이프사이클에 함수 컴포넌트가 접근할 수 있게 합니다.</dd>
        <dd>Hooks는 컴포넌트의 최상위 수준에서만 호출할 수 있습니다.</dd>
        <dd>Hooks는 조건부일 수는 없습니다.</dd>
    </dl>

    <h4 className='title4'>class형 컴포넌트로 카운터 구현하기</h4>
    <Counter1/>

    <h4 className='title4'>Function(함수)형 컴포넌트로 카운터 구현하기</h4>
    <Counter2/>

    <h4 className='title3'>실습응용 - 마켓컬리 숫자증가/ 숫자감소 응용하기</h4>
    <Kullysub/>
    



    </>
  )     
}

export default Class9       