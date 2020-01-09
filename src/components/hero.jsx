import React from "react"

export default ({ img, reversed, href, children }) => (
  <section className={`hero hero-image row no-gutters ${reversed ? 'reversed' : ''}`}>
	<div className="col-md-6 p-3 hero-content d-flex flex-column justify-content-md-center">
	{children}
	{
		href ? <a className="btn btn-primary" href={href}>Selengkapnya</a> : <></>
	}
	</div>
	<div className="col-md-6 hero-img" style={{backgroundImage: `url(${img})`}}>
	</div>
  </section>
)