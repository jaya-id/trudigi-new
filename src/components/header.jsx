import React from "react"
import Logo from "../media/brand.svg"

export default () => (
  <header className="header">
	<nav className="navbar navbar-expand-md navbar-light">
		<a className="navbar-brand" href="/">
			<Logo className="mr-2" style={{height: '40px'}}/>
			<span>TRUDIGI</span>
		</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNavDropdown">
			<ul className="ml-auto navbar-nav">
				<li className="nav-item active">
					<a className="nav-link" href="/">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/products/">Products</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/projects/">Projects</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/members/">Members</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/teams/">Teams</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/about/">About</a>
				</li>
			</ul>
		</div>
	</nav>
  </header>
)