import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div>
	  <Header/>
	  <main className="container-fluid p-3">
	  {children}
	  </main>
	  <Footer/>
  </div>
)