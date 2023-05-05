import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from 'views/Home/Home';
import Titles from 'views/Titles/Titles';
import Text from 'views/Text/Text';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/titles" element={<Titles />} />
        <Route path="/text" element={<Text />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
