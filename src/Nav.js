import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            ContactManager
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/contacts'>
                  Contacts
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/about'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
