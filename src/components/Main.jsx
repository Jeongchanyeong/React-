import React from 'react';
import './Main.css';
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. - 코드가 특정한 값으로 평가될 수 있는 식을 말한다. (if, for문 등등은 불가능, 값으로서 평가받을 수 없기 때문에)
// 2. 숫자, 문자, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야한다.

const Main = () => {
  const user = {
    name: '정찬영',
    isLogin: true,
  };

  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div> 로그인</div>
      )}
    </>
  );
};

export default Main;
