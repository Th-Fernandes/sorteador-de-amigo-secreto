import React from 'react';
import ReactDOM from 'react-dom';
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ConfigPage } from 'pages/config';
import { ResultsPage } from 'pages/results';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<ConfigPage/>} />
          <Route path='/results' element={<ResultsPage/>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);