import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom'
import {UsersProvider} from './context/UsersContext';
import {AppRoutes} from './routing'

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <UsersProvider>
        <AppRoutes />
      </UsersProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
