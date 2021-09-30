import React from 'react'
import Contact from '../components/Contact'
import { ContactsContext } from '../context/Contacts.context'

const contactStyles = {
  maxWidth: '18rem',
  margin: '0 auto'
}

const Contacts = props => {
  const context = React.useContext(ContactsContext)
  const [search, setSearch] = React.useState('')
  const { contacts } = context.state
  console.log(context.dispatch({ type: 'RANDOM_ACTION', payload: '1' }))

  const filteredContacts =
    contacts.length > 0 &&
    contacts.filter(
      contact =>
        contact.firstName.includes(search) || contact.lastName.includes(search)
    )
  console.log(filteredContacts)

  return (
    <div style={contactStyles}>
      <h2 className='text-center mb-3 mt-3'>All Contacts</h2>
      <input
        type='search'
        name='search'
        className='form-control'
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder='search contact'
      />
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Contacts
