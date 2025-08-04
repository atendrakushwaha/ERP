import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { App } from './App';
// import { TagDeallocationProvider } from './pages/admin/tagMgmt/tagDeallocation/TagDeallocationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TagDeallocationProvider> */}
      <RouterProvider router={App} />
    {/* </TagDeallocationProvider> */}
  </React.StrictMode>
);
