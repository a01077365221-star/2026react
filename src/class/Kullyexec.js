import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Kully() {
  return (
    <>
    {/* 상단헤더영역 */}
    <div>
    <h1>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="마켓컬리"/>
    </h1>
    </div>

    {/* {메인콘텐츠 영역} */}
        <main>
            <section>
                <h2>메인 슬라이드</h2>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar,Autoplay]}
                spaceBetween={0} //슬라이드 이미지 간격
                slidesPerView={1} //한페이지에 보여질 이미지 개수
                navigation //메뉴
                autoplay={{delay:3000}} //자동 슬라이드 시간
                pagination={{clickable:true}} //컨트롤버튼 클릭가능 여부
                scrollbar={{draggable:true}} //터치 스크롤 가능 여부
                className='mslide' //슬라이드 서식 적용하고 싶으면 작성하기
                >
                    
                    <SwiperSlide className="swiper_slide"><img src={`images/swiper1.jpg`} alt="" /></SwiperSlide>
                    <SwiperSlide className="swiper_slide"><img src={`images/swiper2.jpg`} alt="" /></SwiperSlide>
                    <SwiperSlide className="swiper_slide"><img src={`images/swiper3.jpg`} alt="" /></SwiperSlide>
                    <SwiperSlide className="swiper_slide"><img src={`images/swiper4.jpg`} alt="" /></SwiperSlide>
                </Swiper>
            </section>


            <article className="best_product">
                <h4>🏆실시간 인기랭킹🏆</h4>
                <p>가장 인기있는 상품만 모아보세요!</p>
                <ul>
                    <li>
                        {/* {<Link to ='/'>dsgfsgsdfg</Link>} */}
                    </li>
                </ul>
            <div>   
                <ul className="product">
                    <li>
                        <div className="box">
                            <img src={`images/마켓컬리1.jpg`} alt="" />
                            <span>멤버스특가</span>
                        </div>
                    
                    <span>1</span>[비비고] 순살 생선구이 6종 (택1)<br/>
                    <span>9%</span> <span>4,980원~</span>
                    <br/>
                    <button><i className="fa-solid fa-cart-shopping"></i> 담기</button>
                    </li>

                    <li><div className="box"><img src={`images/마켓컬리2.jpeg`} alt="" /><span>멤버스특가</span></div>
                    <span>2</span>[Dole] 스위티오 바나나 2종 (택1)
                    <br/>
                    <span>5%</span> <span>3,990원~</span>
                    <br/>
                    <button><i className="fa-solid fa-cart-shopping"></i> 담기</button></li>

                    <li><div className="box"><img src={`images/마켓컬리3.jpg`} alt="" /><span>+최대1만원쿠폰</span></div>
                    <span>3</span>[이연복의 목란] 짬뽕 2인분 (맵기선택)
                    <br/>
                    <span>15%</span> <span>12,325원~</span>
                    <br/>
                    <button><i className="fa-solid fa-cart-shopping"></i> 담기</button></li>

                    <li><div className="box"><img src={`images/마켓컬리4.jpg`} alt="" /><span>+30%쿠폰</span></div>
                    <span>4</span>[KF365] 양념 소불고기 4종 (택1)
                    <br/>
                    <span>28%</span> <span>14,130원~</span>
                    <br/>
                    <button><i className="fa-solid fa-cart-shopping"></i> 담기</button></li>

                    <li><div className="box"><img src={`images/마켓컬리5.jpg`} alt="" /><span>멤버스특가</span></div>
                    <span>5</span>[KF365] 제주 감귤 2.5kg (로얄과)
                    <br/>
                    <span>44%</span> <span>13,900원~</span>
                    <br/>
                    <button><i className="fa-solid fa-cart-shopping"></i> 담기</button></li>
                </ul>
            </div>
        </article>
        </main>
        
        <footer>
            <p>Copyright&copy; 2026 Kully allrights reserved</p>
        </footer>
        </>
  )
}

export default Kully

