import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import ScrollTop from './components/ScrollTop';

function App() {
  
  return (
    <>   
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL} >
      <ScrollTop />
      <AnimatedRoutes />
    </BrowserRouter>
    </>
  );
}

export default App;
