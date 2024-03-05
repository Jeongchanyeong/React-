import React from 'react';

// 객체의 구조분해할당 문법을 이용하여 가져오려는 값을 바로 꺼내올 수 있다.
// props는 부모에서 자식으로만 전달 가능
const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'black',
};

export default Button;
