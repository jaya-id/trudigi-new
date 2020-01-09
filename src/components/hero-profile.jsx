import React from "react"

export default ({ img, reversed, href, children }) => (
  <section className={`heroprofile heroprofile-image row no-gutters pb-5 ${reversed ? 'reversed' : ''}`}>
	<div className="col-md-6 p-5 heroprofile-content d-flex flex-column justify-content-md-center">
	{children}
	</div>
	<div className="col-md-6 heroprofile-img" style={{backgroundImage: `url(${img})`}}>
	</div>
  </section>
)