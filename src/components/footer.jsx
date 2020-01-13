import React from "react"
import IG from "../media/instagram.svg"

export default () => (
  <footer className="footer p-4 bg-dark text-white">
    <div className="d-flex">
  	  <span className="text-muted">&copy; TRUDIGI 2020</span>
      <div className="ml-auto">
        <a href="https://instagram.com/trudigi.id" className="text-warning font-weight-light">
          <IG className="mr-2" style={{height: '24px'}}/>
          trudigi.id
        </a>
      </div>
    </div>
  </footer>
)