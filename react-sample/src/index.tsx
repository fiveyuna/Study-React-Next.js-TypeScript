import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import Msg from './components/Message';
import Container from './components/ContainerSample';
import Container2 from './components/ContainerSample2';

// TODO: 
  // Q - 이게... 다 일일이 임포트해야 하는 건가? -> 폴더 째로 불러와줄 수 있다네

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Msg />
    <Container />
    <Container2 />
  </React.StrictMode>,
  document.getElementById('root')
);
