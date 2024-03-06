import React, { useState } from 'react';
import { useInput } from '../hooks/useInput';

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 사용 가능
// 2. 조건부로 호출될 수는 없다. (반복문, 조건문에 사용 불가능)
// 3. 나만의 훅 (custom Hook)을 직접 만들 수 있다.

// 컴포넌트마다 반복되는 로직이 있고 해당 로직이 훅을 사용하는 로직이라면 custom hook을 만들어 분리시킬 수 있다.

const Hook = () => {
  // 구조분해할당
  const [input, onChange] = useInput();
  const [input1, onChange1] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input onChange={onChange} value={input} type="text" />
      <input onChange={onChange1} value={input1} type="text" />
      <input onChange={onChange2} value={input2} type="text" />
    </div>
  );
};

export default Hook;
