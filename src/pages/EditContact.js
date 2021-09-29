import React from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios'

const EditContact = props => {
  const [contact, setContact] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    picture: '',
    gender: '',
    error: ''
  })

  const { id } = props.match.params
  React.useEffect(() => {
    axios
      .get(`http://localhost:4000/contacts/${id}`)
      .then(({ data }) => {
        setContact({
          ...data,
          dob: data.dob && new Date(data.dob)
        })
      })
      .catch(err =>
        setContact(contact => ({
          ...contact,
          error: err.message
        }))
      )
  }, [id])

  const handleChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    const { firstName, lastName, email, dob, picture, gender } = contact
    const { id } = props.match.params
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
        error: 'Please fill all the input with valid info'
      })
    } else {
      //update data to the api server
      axios
        .put(`http://localhost:4000/contacts/${id}`, contact)
        .then(({ data }) => props.history.push(`/contacts/${id}`))
        .catch(err =>
          setContact({
            ...contact,
            error: err.message
          })
        )
    }
  }
  const handleDateChange = date => {
    setContact({
      ...contact,
      dob: date
    })
  }

  const { firstName, lastName, email, dob, picture, gender, error } = contact
  return (
    <div
      style={{
        width: '25rem',
        margin: '0 auto'
      }}
    >
      <h2 className='text-center mt-3'>Edit Contact</h2>
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

export default EditContact
