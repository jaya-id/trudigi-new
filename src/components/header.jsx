import React from "react"
import Logo from "../media/brand.svg"

export default () => (
  <header className="header">
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
				<a className="nav-link" href="/showcase/">Galeri</a>
			</li>
			<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle"  href="/products/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Produk
				</a>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
				<a className="dropdown-item" href="/products/">Semua Produk</a>
				<div className="dropdown-divider"/>
				<a className="dropdown-item" href="/online/profile">Online Profile</a>
				<a className="dropdown-item" href="/online/system">Online System</a>
				<a className="dropdown-item" href="/online/commerce">Online Commerce</a>
				<div className="dropdown-divider"/>
				<a className="dropdown-item" href="/digital/content">Digital Content</a>
				<a className="dropdown-item" href="/digital/graphics">Digital Graphics</a>
				</div>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/contact/">Kontak</a>
			</li>
			</ul>
		</div>
	</nav>
  </header>
)