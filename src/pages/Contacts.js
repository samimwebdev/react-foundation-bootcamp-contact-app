import React, { Component } from 'react'
import Contact from '../components/Contact'

export default class Contacts extends Component {
  render() {
    const { contacts } = this.props
    return (
      <div>
        <h2 className='text-center mb-3 mt-3'>All Contacts</h2>
        {contacts.length > 0 &&
          contacts.map(contact => (
            <Contact contact={contact} key={contact.id} />
          ))}
      </div>
    )
  }
}
