import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddContact = props => {
  const [contact, setContact] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: new Date(),
    picture: '',
    gender: 'male',
    error: ''
  })

  const handleChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  const handleDateChange = date => {
    setContact({
      ...contact,
      dob: date
    })
  }

  const handleSubmit = e => {
    const { firstName, lastName, email, dob, picture, gender } = contact
    e.preventDefault()
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      dob === '' ||
      picture === '' ||
      gender === ''
    ) {
      setContact({
        ...contact,
        error: 'Please fill all the input with valid info'
      })
    } else {
      //sending API request to the server
      axios
        .post(`${process.env.REACT_APP_API_URI}/contacts`, contact)
        .then(data => {
          props.history.push('/contacts')
        })
        .catch(err => console.log(err))
    }
  }

  const { firstName, lastName, email, dob, picture, error, gender } = contact
  return (
    <div
      style={{
        width: '25rem',
        margin: '0 auto'
      }}
    >
      <h2 className='text-center mt-3'>Add Contact</h2>
      {error && <div className='alert alert-danger'>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='firstName' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            value={firstName}
            name='firstName'
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='dob' className='form-label'>
            Date of Birth
          </label>
          <DatePicker
            selected={dob}
            showMonthDropdown
            showYearDropdown
            dateFormat='dd/MM/yyyy'
            dropdownMode='select'
            maxDate={new Date()}
            onChange={handleDateChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='picture' className='form-label'>
            picture
          </label>
          <input
            type='url'
            value={picture}
            name='picture'
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label>
            Gender:
            <select
              name='gender'
              value={gender}
              onChange={handleChange}
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

export default withRouter(AddContact)
