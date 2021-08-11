import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const contactStyles = {
  maxWidth: '18rem',
  margin: '0 auto'
}

class ContactDetails extends Component {
  state = {
    contact: {}
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios
      .get(`http://localhost:4000/contacts/${id}`)
      .then(({ data }) => {
        this.setState({
          contact: data
        })
      })
      .catch(err => console.log(err))
  }

  // findContact() {

  //   const contact = this.props.contacts.find(
  //     contact => contact.id === Number(id)
  //   )
  //   this.setState({
  //     contact: contact
  //   })
  // }
  // componentDidMount() {
  //   this.findContact()
  // }
  render() {
    const { contact } = this.state
    return (
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
          <p className='card-text'>Date of Birth:{contact?.dob}</p>
        </div>
        <button
          className='btn btn-secondary'
          onClick={() => this.props.history.goBack()}
        >
          Go Back
        </button>
      </div>
    )
  }
}

export default withRouter(ContactDetails)
