import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

// 자신의 state가 변하지 않아도 부모로부터 받은 pops가 변경되면 리렌더링 된다.
// 랜더링을 최소화 하기 위해 각각의 state들은 각각의 컴포넌트 내부에 배치하는 것이 좋다.
const Bulb = () => {
  const [light, setLight] = useState('ON');

  const chageLight = () => {
    setLight(light === 'OFF' ? 'ON' : 'OFF');
  };

  return (
    <div>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      )}
      <button onClick={chageLight}>{light === 'ON' ? '켜기' : '끄기'}</button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const UpCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={UpCount}>+</button>
    </div>
  );
};

/** 리렌더링 조건!
  1. state가 변경되었을 떄
  2. props가 변경되었을 때
  3. 부모가 리렌더링이 발생할 떄
 */

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
