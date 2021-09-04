import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import axios from 'axios'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

class EditContact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    picture: '',
    gender: '',
    error: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params
    axios
      .get(`http://localhost:4000/contacts/${id}`)
      .then(({ data }) => {
        const {
          first_name: firstName,
          last_name: lastName,
          email,
          dob,
          picture,
          gender
        } = data

        this.setState({
          firstName,
          lastName,
          email,
          dob: dob && new Date(dob),
          picture,
          gender
        })
      })
      .catch(err =>
        this.setState({
          error: err.message
        })
      )
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    const { firstName, lastName, email, dob, picture, gender } = this.state
    const { id } = this.props.match.params
    e.preventDefault()

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
      //update data to the api server
      axios
        .put(`http://localhost:4000/contacts/${id}`, {
          first_name: firstName,
          last_name: lastName,
          email,
          picture,
          gender,
          dob
        })
        .then(({ data }) =>
          this.props.history.push(`/contacts/${id}`, 'string')
        )
        .catch(err =>
          this.setState({
            error: err.message
          })
        )
    }
  }
  handleDateChange = date => {
    this.setState({
      dob: date
    })
  }

  render() {
    console.log(this.props.match.params.id)
    const {
      firstName,
      lastName,
      email,
      dob,
      picture,
      gender,
      error
    } = this.state
    return (
      <div
        style={{
          width: '25rem',
          margin: '0 auto'
        }}
      >
        <h2 className='text-center mt-3'>Edit Contact</h2>
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

export default withRouter(EditContact)
