import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { AddParticipantsForm } from './components/addParticipantsForm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={AddParticipantsForm} />
            {/* <App /> */}
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);