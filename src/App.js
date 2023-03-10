import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
// import ScrollTop from './components/ScrollTop';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        {/* <ScrollTop /> */}
        <AnimatedRoutes />
      </Router>
  );
}

export default App;
