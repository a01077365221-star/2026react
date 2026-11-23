import React from 'react'

function Class6() {
  return (
    <>
    <h3 className="title3">일반 DOM, 가상 DOM</h3>
    <p>DOM(Document Object Model)의 약자</p>
    <p>DOM - 객체로 문서를 표현하는 방법 - HTML, PHP, XML작성</p>
    
    <h4 className="title4">일반 DOM의 단점</h4>
    <ul className="list01">
        <li>동적 UI에 최적화되어있지 않다.</li>
        <li>HTML문서 자체적으로는 정적이여서 이것을 JS, jQuery로 동적이게 만들어야 한다.</li>
        <li><marquee>૮⍝• ᴥ •⍝ა 움직이는 태그, marquee ૮⍝• ᴥ •⍝ა</marquee></li>
        <li>DOM을 조작할 때마다 브라우저 엔진이 웹페이지를 다시 새로 그리기 때문에(렌더링)업데이트가 너무 잦으면 성능이 떨어진다.</li>
        <li>데이터가 많은 페이지에서 스크롤바를 내릴수록 수많은 데이터가 로딩되는데 데이터를 표현하는데 있어 속도가 떨어지기 때문에 '성능 이슈'가 발생될 수 있다.</li>
        <li>위와 같은 상황에서 문제를 느낀 페이스북에서는 대규모 프로젝트를 생성시 편하게 사용할 수 있고, 빠르게 대처할 수 있는 리액트를 새롭게 만들었음.</li>
        <p>- 새로고침(Refresh) - f5</p>
        <p>- 리플로우(Reflow) - DOM의 구조나 레이아웃이 변경되면 브라우저는 새로운 레이아웃을 계산하고 화면을 다시 그립니다. 이를 '리플로우'라고 함.(예: 개체의 크기나 위치를 변경하면 '리플로우'발생)</p>
        <p>- 리페인트(Repaint) : 요소의 색상, 테두리 등 서식이 변경되면 브라우저는 해당 요소를 다시 그림. </p>
        
        <h4 className='title4'>리액트의 가상돔</h4>
        <p>카페 게시판 - 왼쪽 '26 ai코딩 어시스턴트  04리액트(react)실무개발 typescript메뉴 클릭 상단 공지글 '가상돔과 컴포넌트 개념'클릭</p>
        https://cafe.naver.com/f-e/cafes/28958780/articles/6838?boardtype=L&menuid=235&referrerAllArticles=false
    </ul>

    <dl>
        <dt>1. 가상 DOM이란?</dt>
        <dd>** 가상 DOM은 실제 브라우저 DOM을 직접 조작하지 않고, 메모리 상에서 가볍게 만든 dom의 복사본임</dd>
        <dd>리액트는 화면 ui의 상태를 이 가상 dom으로 관리함</dd>
        
        <dt>2. 왜 가상 Dom을 사용할까?</dt>
        <dd>실제 dom의 문제점 - 비싸고 느림, 변경 잦을 수록 성능 저하</dd>
        <dd>가상 dom의 장점 - 변경 사항 한 번에 모아서 처리, 최소한의 dom만 업데이트, 성능 최적화 및 예측 가능한 ui 관리</dd>

        <dt>3. 가상 dom 동작 과정</dt>
        <dd>상태state 또는 props변경</dd>
        <dd>새로운 가상 dom 생성</dd>
        <dd>이전 가상 dom과 비교diffing</dd>
        <dd>변경된 부분만 찾아냄</dd>
        <dd>실제 dom에 최소한의 변경만 반영reconciliation</dd>
        <dd>이 과정을 통해 불필요한 dom조작 줄임</dd>
        <dt>4. diffing 알고리즘 핵심 원칙</dt>
        <dd>리액트는 빠른 비교를 위해 몇 가지 가정을 합니다.</dd>
        <dd>같은 타입의 요소는 같은 구조를 가집니다.</dd>
        <dd>다른 타입의 요소는 이전 트리를 버리고 새로 생성합니다.</dd>
        <dd>KEY를 사용해 리스트 요소를 효율적으로 비교합니다.</dd>
        
        <dt>5. reconciliation재조정</dt>
        <dd>가상 dom과 실제 dom 동기화 하는 과정을 말함.</dd>
        <dd>변경된 부분만 실제 dom에 반영합니다.</dd>
        <dd>react의 핵심 성능 최적화 매커니즘입니다.</dd>

        <dt>6. 가상dom= 무조건 빠른가?</dt>
        <dd>항상 빠른건 아님</dd>
        <dd>변경이 거의 없는 경우엔 오히려 오버헤드가 발생될 수 있음</dd>
        <dd>오버헤드는 본래 핵심 작업을 수행하는 과정에서 추가적, 간접적으로 소모되는 비용, 시간 자원을 말합니다.</dd>
        <dd>하지만 대규모 UI%빈번한 상태 변경에는 매우 효율적</dd>
        <dd>핵심은 '효율적인 업데이트 전략'</dd>

        <dt>7. 가상 dom의 장점 정리</dt>
        <dd>빠른 ui업데이트</dd>
        <dd>선언적 ui 작성가능</dd>
        <dd>유지보수 및 예측 가능한 상태 관리</dd>
        <dd>크로스 플랫폼(웹, 모바일) 대응 가능</dd>

        <dt>8. 요약</dt>
        <dd>가상 dom은 실제 dom을 직접 조작하지 않고, 변경된 부분만 효율적으로 업데이트하기 위한 리액트의 핵심 기술.</dd>
        <dd></dd>
    </dl>




    </>
  )
}

export default Class6