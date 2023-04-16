import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
// import ScrollTop from './components/ScrollTop';

function App() {
  return (
      <Router basename="https://brian-nelson10.github.io/EZeats/">
        {/* <ScrollTop /> */}
        <AnimatedRoutes />
      </Router>
  );
}

export default App;
