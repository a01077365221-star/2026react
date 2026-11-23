import React from 'react'

function Class5() {
  return (
    <>
    <h3 className='title3'>01_리액트 배포방법</h3>
    <p>완성된 리액트 프로젝트의 배포방법에 대해 이해하고, 실습하기</p>
    <p>리액트 프로젝트는 http://localhost:3000포트에서 작동하며, build라는 컴파일 과정을 거쳐 앱을 배포한다.</p>

    <dl>
        <dt>*웹서버의 종류</dt>
        <dd>http://localhost:3000</dd>
        <dd>닷홈서버 - 웹호스팅 서비스 신청하여 사용</dd>
        <dd>깃허브 레포지토리(저장소) - 버전관리  목적 저장소</dd>
        <dd>기타 clude - AWS...</dd>
    
    <h4 className="title4">1. 로컬에서 실행 - React 프로젝트 환경</h4>
    <p>vs code에서 src폴더가 아닌 프로젝트 상위 폴더로 이동한 다음 'npm run build'하면 'build'폴더가 생성되면서 파일이 생성됨. <br/> (배포용 폴더 생성)</p>
    <p>내 컴퓨터 환경에서는 브라우저 주소창에 'localhost:3000' or '127.0.0.1'로 입력하여 웹서버 미리보기</p>

    <h4 className="title4">2. 닷홈 서버에 업로드 하여 프로젝트 보기</h4>  
    <p>아래 소스코드를 package.json에 'homepage":"./'를 추가하고, 프로젝트 상위 폴더로 이동한 다음(src폴더가 아님) npm run build를 </p>
    <br/>
    <pre>
        "development" : [<br/>
        "last 1 chrome version", <br/>
        "last 1 firefox version", <br/>
        "last 1 safari version", <br/>
        ]<br/>
        , 
        "homepage": "./" 추가 작성해야
    </pre>
    <p>"homepage": "./" = 홈으로 버튼 클릭시 깃허브에서는 레포지토리 명으로 주소를 적어야 해당 index페이지가 나오기 때문에 <br/>
    homepage:'https://id.github.il/react2025/'이런시긍로 적어줘야 한다.</p>

    <h4 className="title4">3. github에 업로드하여 배포하기</h4>
    <p>github에 접속하여 레포지토리를 생성하여 아래와 같이 배포.</p>
    <ul>
        <li>레포지토리명 : frontend20260825</li>
        <li>상세설명 : 리액트 학습하기</li>
        <li>readme file체크함</li>
        <li>git 레포지토리 주소 복사</li>
        <li>vs code터미널에서 'npm run build'실행하면 'build'폴더 생성됨</li>
        <li>'build'폴더에서 마우스 오른쪽 메뉴 'git bash'실행</li>
        <li>git init(초기화)</li>
        <li>git status(상태확인)</li>
        <li>빨강색 글자: 아직 파일, 폴더가 추적전이라는 뜻으로 상태관리 전을 뜻함</li>
        <li>git add. : 초록색 글자로 변경된 것을 확인(초록색 글자는 상태관리 시작을 의미)</li>
        <li>git commit -m '메시지 작성'</li>
        <li>git remote add origin '레포지토리 주소'</li>
        <li>git branch -m master main : 브런치 명 변경</li>
        <li>git push origin +main : 메인 브런치에 업로드 실행</li>
    </ul>

    <p>* 업로드시 화면에 안나오면 아래 방법을 통해 해결해야합니다.</p>
    <p>* package.json파일을 열어 추가 수정 - "hompage": "https://레포지토리명/",</p>
    <p>* 파일 수정후 다시 'npm run build'실행하여 github에 업로드해야함.</p>


    </dl>

    </>
  )
}

export default Class5