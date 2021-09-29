import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

const contactStyles = {
  maxWidth: '18rem',
  margin: '0 auto'
}

const ContactDetails = props => {
  const [contact, setContact] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const id = props.match.params.id
  React.useEffect(() => {
    axios
      .get(`http://localhost:4000/contacts/${id}`)
      .then(({ data }) => {
        setContact(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [id])

  const handleDeleteContact = id => {
    axios
      .delete(`http://localhost:4000/contacts/${id}`)
      .then(data => {
        props.history.push('/contacts')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {loading ? (
        <p className='text-center'>loading....</p>
      ) : (
        <div className='card contact my-2' style={contactStyles}>
          <img
            src={contact?.picture}
            className='card-img-top'
            alt={contact?.firstName}
          />
          <div className='card-body'>
            <h5 className='card-title'>
              {contact?.firstName} {contact?.lastName}
            </h5>
            <p className='card-text'>{contact?.email}</p>
            <p className='card-text'>{contact?.gender}</p>
            <p className='card-text'>
              Date of Birth:{dayjs(contact?.dob).format('DD/MM/YYYY')}
            </p>
          </div>
          <button
            className='btn btn-danger mb-2'
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete Contact
          </button>

          <Link className='btn btn-info mb-2' to={`/edit/${contact.id}`}>
            Edit Contact
          </Link>
          <button
            className='btn btn-secondary'
            onClick={() => props.history.goBack()}
          >
            Go Back
          </button>
        </div>
      )}
    </>
  )
}

export default ContactDetails
