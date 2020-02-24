import React from "react"

export default ({ img, reversed, children }) => (
  <section className={`hero hero-image p-0 row no-gutters mb-5${reversed ? 'reversed' : ''}`}>
	<div className="col-md-7 hero-img" style={{backgroundImage: `url(${img})`}}>
	</div>
	<div className="col-md-5 hero-content d-flex flex-column justify-content-center">
	{children}
	</div>
  </section>
)