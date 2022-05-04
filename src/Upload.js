import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

const FormData = require('form-data')

export default function Upload ({ user }) {
  const [selected, setSelected] = useState(null)
  const [upload, setUpload] = useState({})
  const [loading, setLoading] = useState(false)
  // const [user, setUser] = useState(user)

  const handleChange = (event) => {
    setSelected(event.target.files[0])
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData()
    data.append('upload', selected)
    axios({
      url: apiUrl + '/uploads',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.token}`
      },
      data
      // : data + `${user}`
    })
      .then(res => setUpload(res.data.upload))
      .then(() => setLoading(false))
      .catch(console.error)
  }
  return (
    <div>
      {upload.url ? (<img className='display-image' alt={upload.url} src={upload.url} />) : ('')}
      {loading
        ? (<img className='display-loading' alt='loading gif'
          src='https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif'/>)
        : ('')}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formFile' className='mb-3' id='upload-file-input'>
          <Form.Label>Upload Your Pic Yo</Form.Label>
          <Form.Control type='file' onChange={handleChange} />
          <Button variant='primary' type='submit' value='Submit'>
                Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
