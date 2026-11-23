import React, { Component } from 'react'

export default class Counter1 extends Component {
  //1. 변수 초기값 선언 
  state={n:1}

  //2. 함수 작성하기(숫자증가, 숫자감소)
  onPlus=()=>{ //1씩 증가
    console.log('숫자증가');
    this.setState({
      n:this.state.n+1
    })
  }

  onMinus=()=>{ //1씩 감소
  console.log('숫자감소');

  if(this.state.n===1){
    this.setState({n:1});
  }else{
    this.setState({
      n:this.state.n-1
    })
  }
}

  render() {
    return (
      <>
      <p>+, - 버튼을 클릭시 숫자 증가, 숫자 감소하는 state값을 작성하기</p>
      <div>
        <input type="button" value="-" 
        className='btn' onClick={this.onMinus} />
        
        숫자출력: <span className='num'>
          {this.state.n}
        </span>


        <input type="button" value="+"
        className='btn' onClick={this.onPlus}/>
      </div>
      </>
    )
  }
}
