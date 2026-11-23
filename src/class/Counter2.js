import React, {useState} from 'react'

function Counter2() {
    const [num1, setNum] = useState(1);

    //상태변경을 위해 useState 함수 작성하기
    //const [변수명, 함수명] = useState();

    //const onPlus=()=>{}
    const onPlus=()=>{
        setNum(num1+1); //1씩 더하기
    }

    //const onMinus=()=>{} //감소함수
    const onMinus=()=>{
        if(num1===1){
            setNum(1); //1로 초기화
        }else{
            setNum(num1-1);
        }






}
  return (
    <>
    <h3 className='title3'>실습응용. Counter</h3>
    <p>+, -버튼을 클릭하면 숫자 증가, 감소하는 state값을 작성하기

    </p>
    
    
    </>
  )
}

export default Counter2