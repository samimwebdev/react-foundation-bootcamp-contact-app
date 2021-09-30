import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className='bg-light text-center p-5'>
        <h1 className='display-5'>Contacts Manager</h1>
        <p className='lead'>Let's share our contact info</p>
        <Link to='/contacts' className='btn btn-primary'>
          Browse Contacts
        </Link>
      </div>
    )
  }
}
