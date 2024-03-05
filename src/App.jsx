import './App.css';

import React from 'react';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const buttonProps = {
    text: '메일',
    color: 'red',
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={'카페'} />
      <Button text={'고양이'} />
      <Button color={'red'}>
        <div>자식요소</div>
        <Header />
      </Button>
    </>
  );
}

export default App;
