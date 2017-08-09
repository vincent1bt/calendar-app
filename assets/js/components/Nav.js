import React from 'react';
import { NavLink } from 'react-router-dom';

const months = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "Octuber",
  "November", "December"
];

const Nav = () => {
  return (
    <nav className="months-nav">
      <ul className="links">
        {
          months.map((month, index) => {
            return (
              <li key={index} >
                <NavLink to={`/month/${index + 1}`}
                      activeClassName="activeMonthLink">
                </NavLink>
                {month}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
};

export default Nav;
