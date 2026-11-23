import React from 'react'
import Child from './Child'

function Father() {
  return (
    <>
    <h2>Father 컴포넌트</h2>
    <p>Grand 컴포넌트의 자손입니다.</p>
    <Child />

    <br />

<ul>
    <li>
    <Child name='스위티오 바나나 2'
    price='3,000'
    sale='50%' />
    </li>

    <li>
    <Child name='제주감귤'
    price='16,000'
    sale='30%' />
    </li>

    <li>
    <Child name='밀키 초콜릿'
    price='4,500'
    sale='10%' />
    </li>

    <li>
    <Child name='훈제오리'
    price='23,000'
    sale='30%' />
    </li>

    <li>
    <Child name='양념 불고기 4종 세트'
    price='15,000'
    sale='20%' />
    </li>
</ul>

    </>
  )
}

export default Father