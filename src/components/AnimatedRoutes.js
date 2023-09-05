import React from "react";
import { Switch, Route,} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Catering from "../pages/Catering";
import FoodTruck from "../pages/FoodTruck";
import NotFound from "../pages/NotFound";

function AnimatedRoutes() {
    
    return (
        <AnimatePresence mode="wait">
           
<Switch>
            <Route
              exact path="/">
              <Home />
              </Route>
              <Route
              path="/home">
               <Home /> 
               </Route>
              <Route
              path="/contact">
                <Contact />
              </Route>
            
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
          </Switch>
          </AnimatePresence>
    );
};
export default AnimatedRoutes;