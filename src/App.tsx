import React, { ReactElement, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorMsg from './components/ErrorMsg';

import { routes } from './router';
import dispatchCustomEvent from './funcs/dispatchCustomEvent';

import 'bootstrap-icons/font/bootstrap-icons.css';

function App(): ReactElement {
  useEffect(() => {
    function callback(event: KeyboardEvent): void {
      if (event.code === 'Escape') dispatchCustomEvent('escape');
      if (event.code === 'Enter') dispatchCustomEvent('confirm');
    }
    window.addEventListener('keydown', callback);
    return () => window.removeEventListener('keydown', callback);
  }, []);
  return (
    <>
      <ErrorMsg />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={<route.component />} key={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
