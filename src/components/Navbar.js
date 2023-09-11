import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">News App</a>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar
