import React, { useState } from "react";

const PrevNext = ({ currentPage, setCurrentPage, ...props }) => {
  const [finish, setFinish] = useState(false);
  const previousPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
      setFinish(false);
    }
  };

  const nextPage = () => {
    if (currentPage === 3) {
      setCurrentPage(currentPage + 1);
      setFinish(true);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const finishPage = () => {
    console.log("finish");
    console.log(currentPage);
  };
  return (
    <div className="actions clearfix" style={{ marginTop: "20px" }}>
      <ul role="menu" aria-label="Pagination">
        <li>
          <a href="#previous" role="menuitem" onClick={previousPage}>
            Previous
          </a>
        </li>
        <li
          aria-hidden="false"
          style={finish ? { display: "none" } : { display: "list-item" }}
        >
          <a href="#next" role="menuitem" onClick={nextPage}>
            Next
          </a>
        </li>
        <li style={finish ? { display: "list-item" } : { display: "none" }}>
          <a href="#finish" role="menuitem" onClick={finishPage}>
            Finish
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PrevNext;
