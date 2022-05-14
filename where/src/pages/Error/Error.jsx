import React from 'react'
import "../../css/error.css";
import "../../css/style.css";
const Error = () => {
    return (
        <main className="haslayout">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="content">
                            <div className="error">
                                <h2>404<span>Page not Found</span></h2>
                                <h3>Sorry but the page that you are looking for does not exist</h3>
                                <a className="btn-back btngreen" href="">Go Back to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Error;