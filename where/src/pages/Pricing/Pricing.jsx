import React from 'react'
import "../../css/style.css"
const Pricing = ({ menuItems, ...params }) => {
    return (
        <div role="tabpanel" className="tab-pane" id="reviews">
            <ul className="prices">
                {menuItems.map((item, index) => {
                    return <li>
                        <div className="pricebox" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span className="price">${item.price}</span>
                        </div>
                    </li>

                }
                )}
            </ul>
        </div>
    )
}

export default Pricing
