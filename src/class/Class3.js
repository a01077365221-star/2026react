import React from 'react'
import banner from '../images/banner.jpg';

function Class3() {
  return (
    <>
    <h3 className="title3">4. 리액트에서 이미지 삽입하는 방법 4가지</h3>
    <ol>
        <li>public 폴더에서 이미지 가져오기 3가지 방법
            <ul>
                <li>src{`${process.env.PUBLIC_URL}/폴더명/파일명.확장자`}</li>
                <li>src = {`/폴더명/파일명.확장자`}</li>
                <li>src = {`폴더명/파일명.확장자`}</li>
            </ul>
        </li>
        <li>src폴더에 이미지가 있는 경우 - import</li>
            <ul>
                <li>import banner from './src/폴더명/파일명.확장자';</li>
                <li>img src={} alt=""방식으로 작성합니다.</li>
                <li>require
                    <p>img src={require('../images/banner1.jpg').default} alt=""</p>
                </li>
            </ul>
    </ol>

    <img src={`${process.env.PUBLIC_URL}/images/cat1.png`} alt="" />
    <br />
    <img src={`images/cat2.jpg`} alt="" /> <br />
    <img src={`images/cat3.jpg`} alt="" /> <br />

    <br />
    {/* {src폴더에 이미지가 존재하는 경우} */}
    <img src={banner} alt=""/>

    <div className="bg_img">배경이미지</div>
    </>
  )
}

export default Class3