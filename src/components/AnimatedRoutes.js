import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
           
<Routes location={location} key={location.pathname}>
            <Route
               path="/"
              exact element={<Home/>}
              />
              <Route
              path="/Home"
              element={<Home/>}
              />
              <Route
              path="/contact"
              element={<Contact />}
              />

              
                {/* <Route 
                text="Success"
                path="/success"
                element={<Success/>}
                /> */}
          </Routes>
          </AnimatePresence>
    );
};
export default AnimatedRoutes;