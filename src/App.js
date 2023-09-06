import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import AnimatedRoutes from './components/AnimatedRoutes';
import ScrollTop from './components/ScrollTop';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Catering from "./pages/Catering";
import FoodTruck from "./pages/FoodTruck";
import NotFound from "./pages/NotFound";
function App() {
  const location = useLocation();
  return (
    <>   
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL} >
      <ScrollTop />
      {/* <AnimatedRoutes /> */}
      <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                   exact path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/catering"
                    element={<Catering />}
                />
                <Route
                    path="/foodtruck"
                    element={<FoodTruck />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
