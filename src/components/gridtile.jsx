import React from "react"

export default ({children, href}) => (
    <a href={href} className="d-block product-content col-md-3 col-sm-6 bd-highlight">
        {children}
    </a>
)
