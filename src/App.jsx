import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  // 배열의 구조분해할당
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');
  // 리액트는 state값이 변화하였을 때 렌더링 되기 떄문에 가변적인 값을 관리할 떄 일반 변수가 아닌 state를 이용해서 처리한다.

  const UpCount = () => {
    setCount(count + 1);
  };

  const chageLight = () => {
    setLight(light === 'OFF' ? 'ON' : 'OFF');
  };

  return (
    <>
      <div>
        <h1>{light}</h1>
      </div>
      <button onClick={chageLight}>{light === 'OFF' ? '켜기' : '끄기'}</button>
      <div>
        <h1>{count}</h1>
        <button onClick={UpCount}>+</button>
      </div>
    </>
  );
}

export default App;
