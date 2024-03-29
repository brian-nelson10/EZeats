import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Catering from "../pages/Catering";
import FoodTruck from "../pages/FoodTruck";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">

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
                path="/order"
                element={<Order />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </AnimatePresence>
    );
};
export default AnimatedRoutes;