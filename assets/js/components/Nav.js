import React from 'react';
import { Link } from 'react-router'

const months = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "Octuber",
  "November", "December"
];

const Nav = months.map((month, index) => {
    return (
      <li key={index} >
              <Link to={`/month/${index + 1}`}
                    activeClassName="activeMonthLink">
              </Link>
              {month}
      </li>
    )
});

export default Nav;
