import React from "react"

export default ({ children }) => (
  <section className={`hero-summary my-5 d-flex flex-column`}>
	  <div className="hero-content container p-3 text-center">
		{children}
	  </div>
  </section>
)