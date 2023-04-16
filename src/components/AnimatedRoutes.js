import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Catering from "../pages/Catering";

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
              path="/EZeats/home"
              element={<Home/>}
              />
              <Route
              path="/EZeats/contact"
              element={<Contact />}
              />
              <Route
              path="/EZeats/catering"
              element={<Catering/>}
              />
              {/* <Route
              path="/foodtruck"
              element={}
              /> */}
          </Routes>
          </AnimatePresence>
    );
};
export default AnimatedRoutes;