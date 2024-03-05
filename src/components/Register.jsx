import React, { useState } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// 비슷한 여러개의 state가 있다면 하나의 객체값으로 묶어서 하나의 state로 관리하면 편함
// 비슷한 이벤트 핸들러들은 통합 이벤트 핸들러로 묶어줄 수 있다.
const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <input
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
    </>
  );
};

export default Register;
