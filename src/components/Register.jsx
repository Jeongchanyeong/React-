import React, { useState, useRef } from 'react';

const Register = () => {
  //  ref는 컴포넌트 내부에서 랜더링에 영향을 미치지 않아야되는 변수를 생성할 때 활용할 수 있다.
  const countRef = useRef(0);
  const inputRef = useRef();
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    if (input.name === '') {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={input.name}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value={'kr'}>한국</option>
          <option value={'us'}>미국</option>
          <option value={'cn'}>중국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onClick}>제출</button>
    </>
  );
};

export default Register;
