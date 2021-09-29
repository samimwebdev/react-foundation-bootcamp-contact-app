import React from 'react'
import Contact from '../components/Contact'
import { ContactsContext } from '../context/Contacts.context'

const Contacts = props => {
  const context = React.useContext(ContactsContext)
  const { contacts } = context

  return (
    <div>
      <h2 className='text-center mb-3 mt-3'>All Contacts</h2>
      {contacts.length > 0 &&
        contacts.map(contact => <Contact contact={contact} key={contact.id} />)}
    </div>
  )
}

export default Contacts
