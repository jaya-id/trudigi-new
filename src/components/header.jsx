import React from "react"
import Logo from "../media/brand.svg"

export default () => (
  <header className="header">
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand mr-auto" href="/">
			<Logo className="mr-2" style={{height: '40px'}}/>
			<span>TRUDIGI</span>
		</a>
		<a className="nav-link" href="/">Home</a>
		<a className="nav-link" href="/showcase/">Showcase</a>
		<a className="nav-link" href="/products/">Products</a>
		<a className="nav-link" href="/contact/">Contact</a>
	</nav>
  </header>
)