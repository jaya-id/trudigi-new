import React from "react"

export default ({ children }) => (
  <section className={`hero hero-summary d-flex flex-column justify-content-center`}>
	  <div className="hero-content container p-3 text-center">
		{children}
	  </div>
  </section>
)