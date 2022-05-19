import React from 'react'
import "../../css/Dashboard/header.css"
const Header = (props) => {
    return (
        <div className="listar-dashboardbanner">
            <h1 className='white'>{props.title}</h1>
            <div className="listar-description">
                <p>{props.item}</p>
            </div>
        </div>
    )
}

export default Header