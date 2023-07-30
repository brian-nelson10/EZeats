import React from "react";
import { Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Catering from "../pages/Catering";
import FoodTruck from "../pages/FoodTruck";

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
              path="/home"
              exact element={<Home/>}
              />
              <Route
              path="/contact"
              exact element={<Contact />}
              />
              <Route
              path="/catering"
              exact element={<Catering/>}
              />
              <Route
              path="/foodtruck"
              element={<FoodTruck/>}
              />
              <Route
              path="*"
              element={<NotFound/>}
              />
          </Routes>
          </AnimatePresence>
    );
};
export default AnimatedRoutes;