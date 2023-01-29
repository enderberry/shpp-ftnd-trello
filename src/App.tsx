import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './router';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
