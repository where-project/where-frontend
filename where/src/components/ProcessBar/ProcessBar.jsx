import React from "react";
import "../../css/processbar.css";

const ProcessBar = ({ currentPage, ...props }) => {
  return (
    <div className="steps clearfix">
      <ul role="tablist">
        <li role="tab" className={`${currentPage >= 1 && 'done'}`} >
          <a href="#1">
            <span className={`number ${currentPage >= 2 && 'background-blue'}`}>1</span>
            <em>Basic Information</em>
          </a>
        </li>
        <li role="tab" className={`${currentPage >= 2 && 'done'}`} >
          <a href="#2">
            <span className={`number ${currentPage >= 3 && 'background-blue'}`}>2</span>
            <em>Location</em>
          </a>
        </li>
        <li role="tab" className={`${currentPage >= 3 && 'done'}`} >
          <a href="#3">
            <span className={`number ${currentPage >= 4 && 'background-blue'}`}>3</span>
            <em>Price Setting</em>
          </a>
        </li>
        <li role="tab" className={`${currentPage >= 4 && 'done'}`} >
          <a href="#4">
            <span className={`number ${currentPage >= 4 && 'background-blue'}`}>4</span>
            <em>Business Hours</em>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProcessBar;
