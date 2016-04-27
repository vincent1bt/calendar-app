import React from 'react';
import dateObject from "helpers/getDate";

console.log(dateObject());

const Month = () => {
  //{ monthName }
  //console.log(monthName);

  return (
    <div className="month">
      <table>
        <tbody>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Month;
