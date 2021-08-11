import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class AddContact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    dob: new Date(),
    picture: '',
    gender: '',
    error: ''
    // error: {
    //   firstName: ''
    // }
  }

  handleChange = e => {
    //firstName
    //lastName
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDateChange = date => {
    this.setState({
      dob: date
    })
  }

  handleSubmit = e => {
    const { firstName, lastName, email, dob, picture, gender } = this.state
    e.preventDefault()

    // if(firstName === ''){
    //   this.setState({
    //     error: {
    //       firstName: 'FirstName is required'
    //     }
    //   })
    // }

    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      dob === '' ||
      picture === '' ||
      gender === ''
    ) {
      this.setState({
        error: 'Please fill all the input with valid info'
      })
    } else {
      //valid input
      console.log(this.state)
      //sending API request to the server
      axios
        .post('http://localhost:4000/contacts', {
          first_name: firstName,
          last_name: lastName,
          email,
          dob,
          picture,
          gender
        })
        .then(data => {
          console.log(data)
          this.props.history.push('/contacts')
        })
        .catch(err => console.log(err))
    }
  }
  isMaleSelected = this.state.gender === 'male'
  isFemaleSelected = this.state.gender === 'female'

  render() {
    const {
      firstName,
      lastName,
      email,
      dob,
      picture,
      error,
      gender
    } = this.state
    return (
      <div
        style={{
          width: '25rem',
          margin: '0 auto'
        }}
      >
        <h2 className='text-center mt-3'>Add Contact</h2>
        {error && <div className='alert alert-danger'>{error}</div>}
        <form onSubmit={this.handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>
              First Name
            </label>
            <input
              type='text'
              value={firstName}
              name='firstName'
              onChange={this.handleChange}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <input
              type='text'
              value={lastName}
              name='lastName'
              onChange={this.handleChange}
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              value={email}
              name='email'
              onChange={this.handleChange}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='dob' className='form-label'>
              Date of Birth
            </label>
            <DatePicker selected={dob} onChange={this.handleDateChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='picture' className='form-label'>
              picture
            </label>
            <input
              type='url'
              value={picture}
              name='picture'
              onChange={this.handleChange}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label>
              Gender:
              <select
                name='gender'
                value={gender}
                onChange={this.handleChange}
                className='form-select'
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </label>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(AddContact)
