import React from "react"
import Logo from "../media/brand.svg"

export default () => (
  <header className="header">
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="/">
			<Logo className="mr-2" style={{height: '40px'}}/>
			<span>TRUDIGI</span>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="ml-auto navbar-nav">
			<li class="nav-item active">
				<a class="nav-link" href="/">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/showcase/">Galeri</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle"  href="/products/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Produk
				</a>
				<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
				<a class="dropdown-item" href="/products/">Semua Produk</a>
				<div class="dropdown-divider"/>
				<a class="dropdown-item" href="/online/profile">Online Profile</a>
				<a class="dropdown-item" href="/online/system">Online System</a>
				<a class="dropdown-item" href="/online/commerce">Online Commerce</a>
				<div class="dropdown-divider"/>
				<a class="dropdown-item" href="/digital/content">Digital Content</a>
				<a class="dropdown-item" href="/digital/graphics">Digital Graphics</a>
				</div>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/contact/">Kontak</a>
			</li>
			</ul>
		</div>
	</nav>
  </header>
)