import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

const contactStyles = {
  maxWidth: '18rem',
  margin: '0 auto'
}
export default class Contact extends Component {
  render() {
    const { contact } = this.props
    return (
      <div className='card contact my-2' style={contactStyles}>
        <div className='card-body'>
          <h5 className='card-title'>
            {contact.firstName} {contact.lastName}
          </h5>
          <p className='card-text'>{contact.email}</p>
          <p className='card-text'>{contact.gender}</p>
          <p className='card-text'>
            Date of Birth: {dayjs(contact.dob).format('DD/MM/YYYY')}
          </p>
          <Link className='btn btn-primary' to={`/contacts/${contact.id}`}>
            Know More
          </Link>
        </div>
      </div>
    )
  }
}
