import React from "react"
import Logo from "../media/brand.svg"

export default () => (
  <header className="header">
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand mr-auto" href="/">
			<Logo style={{height: '40px'}}/>
			TRUDIGI
		</a>
	</nav>
  </header>
)