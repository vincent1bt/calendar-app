import React from 'react';
import PropTypes from 'prop-types';

const Month = ({ list, name, year }) => {
  if(list !== null) {
    return (
      <div className="month">
        <h2>{name} {year}</h2>
        <ul className="month-names">
          <li><p>Mon</p></li>
          <li><p>Tue</p></li>
          <li><p>Wed</p></li>
          <li><p>Thu</p></li>
          <li><p>Fri</p></li>
          <li><p>Sat</p></li>
          <li><p>Sun</p></li>
        </ul>
        <ul className="month-days">
          {list}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="month">
        <div className="loader">
          <img src="/static/spin.svg" />
        </div>
      </div>
    )
  }
}

Month.propTypes = {
  list: PropTypes.array,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

export default Month;
