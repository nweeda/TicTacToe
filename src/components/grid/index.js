import React from "react";
import "./Grid.css";

export const Grid = () => {
  return (
    <div className="board-container">
      <table>
        <tr>
          <td className="cell-container">0</td>
          <td className="cell-container">1</td>
          <td className="cell-container">2</td>
        </tr>
        <tr>
          <td className="cell-container">3</td>
          <td className="cell-container">4</td>
          <td className="cell-container">5</td>
        </tr>
        <tr>
          <td className="cell-container">6</td>
          <td className="cell-container">7</td>
          <td className="cell-container">8</td>
        </tr>
      </table>
    </div>
  );
};

export default Grid;
