import React from 'react'

function Child({name = '000', price='0000', sale='00'}) {
  return (
    <>

    <ul>
        <li>상품사진</li>
        <li>상품명: {name}</li>
        <li>가격: {price}</li>
        <li>할인가: {sale}</li>
    </ul>

    </>
  )
}

export default Child