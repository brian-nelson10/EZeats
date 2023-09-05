import React from "react";
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Catering from "../pages/Catering";
import FoodTruck from "../pages/FoodTruck";
import NotFound from "../pages/NotFound";

function AnimatedRoutes() {
    
    return (
        <AnimatePresence mode="wait">
           
<Routes >
            <Route
               path="/"
              element={<Home/>}
              />
              <Route
              path="/home"
              element={<Home/>}
              />
              <Route
              path="/contact"
              element={<Contact />}
              />
              <Route
              path="/catering"
              element={<Catering/>}
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