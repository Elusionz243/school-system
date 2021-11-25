/**
 * @Dependencies
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * @Styles
 */

/**
 * Error 404: page not found
 * @function NotFound
 *  Returns an {Error: 404} page when on an invalid Route.
 * @returns {Error: 404 JSX Element}
 */
export default function NotFound() {

  return (
    <>
      <h1 style={{fontSize: '3rem', color: 'blue'}}>ERROR 404</h1>
      <p style={{fontSize: '1.2rem'}}>The page you are looking for doesn't exist. 
        Click the button below to return to the home page.</p>
      <Link to="/" className='btn btn-primary'>Return home</Link>
    </>
  )
}