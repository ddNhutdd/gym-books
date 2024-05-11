import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import * as bootstrap from 'bootstrap';
import {
  RouterProvider,
} from "react-router-dom";
import router from 'src/routes/index.jsx';
import Config from './components/config';

const root = document.getElementById('root');
if (root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Config>
        <RouterProvider router={router} />
      </Config>
    </React.StrictMode>,
  )
