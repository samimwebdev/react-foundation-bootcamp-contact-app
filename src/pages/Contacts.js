import React from 'react'
import Contact from '../components/Contact'

const Contacts = props => {
  const { contacts } = props
  return (
    <div>
      <h2 className='text-center mb-3 mt-3'>All Contacts</h2>
      {contacts.length > 0 &&
        contacts.map(contact => <Contact contact={contact} key={contact.id} />)}
    </div>
  )
}

export default Contacts
