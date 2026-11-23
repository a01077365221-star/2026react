import React, { useState } from 'react'

function Counter() {
    const [num1, setNum1] = useState(0); 

    // 1. 숫자 증가 함수
    const onPlus=()=>{
        setNum1(num1+1);
    }

    // 2. 숫자 감소 함수
    const onMinus=()=>{
        if(num1===0){
            setNum1(0);
        }else{
            setNum1(num1-1);
        }
    }

    return (
    <>
    <h3 className='title3'>Counter</h3>
    <p>+, -버튼을 클릭하면 숫자 증가, 감소하는 state값을 작성하기</p>

    <div>
        <input type="button" value='-' onClick={onMinus}/>
        숫자 출력 : <span className='num'>
            {num1}
        </span>
        <input type='button' value='+' onClick={onPlus}/>
    </div>
    </>
  )
}

export default Counter