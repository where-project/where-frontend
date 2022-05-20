import React from 'react'
import "../../css/pagination.css";
function Pagination() {
    return (
        <nav className="pagination">
            <ul>
                <li className="prevpage"><a href=""><i className="fa fa-angle-left"></i></a></li>
                <li><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li className="nextpage"><a href=""><i className="fa fa-angle-right"></i></a></li>
            </ul>
        </nav>
    )
}

export default Pagination