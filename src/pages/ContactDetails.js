import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

const contactStyles = {
  maxWidth: '18rem',
  margin: '0 auto'
}

class ContactDetails extends Component {
  state = {
    contact: {},
    loading: true
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios
      .get(`http://localhost:4000/contacts/${id}`)
      .then(({ data }) => {
        this.setState({
          contact: data,
          loading: false
        })
      })
      .catch(err => console.log(err))
  }
  handleDeleteContact = id => {
    axios
      .delete(`http://localhost:4000/contacts/${id}`)
      .then(data => {
        this.props.history.push('/contacts', 'str')
      })
      .catch(err => console.log(err))
  }

  render() {
    const { contact, loading } = this.state
    return (
      <>
        {loading ? (
          <p className='text-center'>loading....</p>
        ) : (
          <div className='card contact my-2' style={contactStyles}>
            <img
              src={contact?.picture}
              className='card-img-top'
              alt={contact?.first_name}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                {contact?.first_name} {contact?.last_name}
              </h5>
              <p className='card-text'>{contact?.email}</p>
              <p className='card-text'>{contact?.gender}</p>
              <p className='card-text'>
                Date of Birth:{dayjs(contact?.dob).format('DD/MM/YYYY')}
              </p>
            </div>
            <button
              className='btn btn-danger mb-2'
              onClick={() => this.handleDeleteContact(contact.id)}
            >
              Delete Contact
            </button>

            <Link className='btn btn-info mb-2' to={`/edit/${contact.id}`}>
              Edit Contact
            </Link>
            <button
              className='btn btn-secondary'
              onClick={() => this.props.history.goBack()}
            >
              Go Back
            </button>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(ContactDetails)
