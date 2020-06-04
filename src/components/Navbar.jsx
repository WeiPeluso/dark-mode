import React from 'react';
import {useDarkMode} from './Hooks/useDarkMode'

const Navbar = () => {

   const [values,toggleMode]=useDarkMode('mode',false)
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={values ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
