import React from "react"

export default ({ img, children, href }) => (
  <section className={`hero-summary row no-gutters mb-5`}  style={{backgroundImage: `url(${img})`}}>
	  <div className="col-md-6 hero-content-head d-flex flex-column-center container p-5">
        <span className="align-middle">
		{children}
        {
		href ? <a className="btn btn-primary" href={href}>Pesan</a> : <></>
	    }
        </span>
	  </div>
	  <div className="col hero-img">
	  </div>
  </section>
)