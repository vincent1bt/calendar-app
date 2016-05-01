import React from 'react';

const Month = ({ name, year, arrayLi }) => {
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
        {arrayLi}
      </ul>
    </div>
  );
}

export default Month;
