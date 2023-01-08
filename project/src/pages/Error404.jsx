import React from 'react'

function Error404() {
    return (
        <>
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">
                            <div className="text-center">
                                <div className="error mx-auto" data-text="404">404</div>
                                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                                
                                <a href="/home">&larr; volver al inicio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404