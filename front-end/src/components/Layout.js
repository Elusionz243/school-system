/**
 * @Dependencies
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/**
 * @Components
 *  <Home />
 *  <NotFound />
 */
import Home from "./home/Home";
import NotFound from '../utils/errors/NotFound';

/**
 * @Styles
 * Layout.css
 */

/**
 * Main router component 
 * @function Layout 
 *    Handles all the routes for the application
 * @returns JSX Element
 */
export default function Layout() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}