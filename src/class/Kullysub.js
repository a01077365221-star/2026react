import React, {useState} from 'react'

function Kullysub() {
    // 1. 상품 단가
    const product_price = 9990;

    // 2. 수량과 총 가격 상태값 선언
    const [num, setNum] = useState(1);
    const [price, setPrice] = useState(product_price);

    // 3. 숫자 증가 함수
    const onPlus=()=>{
        setNum(num+1);
        setPrice(product_price*(num+1));
    }

    // 4. 숫자 감소 함수
    const onMinus=()=>{
        if(num===1){
            setNum(1);
            setPrice(product_price);
        }else{
            setNum(num-1);
            setPrice(product_price*(num-1));
        }
    }

  return (
    <>
    <div>
        <input type="button" value="-" onClick={onMinus}/>

        숫자 출력 : <span className='num'>
            {num}
        </span>

        <input type='button' value='+' onClick={onPlus} />

        <p>
            총 가격합계 : {price.toLocaleString()}원
        </p>
    </div>

    </>
  )
}

export default Kullysub