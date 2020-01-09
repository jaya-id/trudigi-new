import React from "react"
import Logo from "../media/brand.svg"

export default () => (
  <header className="header">
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand mr-auto" href="/">
			<Logo style={{height: '40px'}}/>
			TRUDIGI
		</a>
		<a className="navbar-brand" href="/showcase">Showcase</a>
		<a className="navbar-brand" href="/">Products</a>
		<a className="navbar-brand" href="/">Contact</a>
	</nav>
  </header>
)