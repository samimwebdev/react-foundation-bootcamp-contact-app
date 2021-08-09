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
      .get(`https://randomuser.me/api/?login.uuid=${id}&seed=sjdgsadsh`)
      .then(data => {
        console.log(data.data.results[0])
        this.setState({
          contact: data.data.results[0]
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
          src={contact?.picture?.large}
          className='card-img-top'
          alt={contact?.name?.first}
        />
        <div className='card-body'>
          <h5 className='card-title'>
            {contact?.name?.first} {contact?.name?.last}
          </h5>
          <p className='card-text'>{contact?.email}</p>
          <p className='card-text'>{contact?.gender}</p>
          <p className='card-text'>Date of Birth:{contact?.dob?.date}</p>
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
