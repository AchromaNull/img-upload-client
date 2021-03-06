import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
// import InputGroup from 'react-bootstrap/InputGroup'
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import Deets from './components/Body/Deets'
// import { data } from 'autoprefixer'
// import Thumbnail from './components/Body/Thumbnail'

const FormData = require('form-data')

export default function Upload ({ user }) {
  const [selected, setSelected] = useState(null)
  const [upload, setUpload] = useState({})
  const [loading, setLoading] = useState(false)
  // const [info, setInfo] = useState('')

  // const [user, setUser] = useState(user)
  const [caption, setCaption] = React.useState('')
  const [title, setTitle] = React.useState('')

  const handleChange = (event) => {
    setSelected(event.target.files[0])
    // console.log(event.target.files[0])
  }
  const handleSubmit = (event) => {
    const details = {
      caption: { caption },
      title: { title }
    }
    event.preventDefault()
    setLoading(true)
    const data = new FormData()
    data.append('upload', selected)

    data.append('caption', caption)
    data.append('title', title)

    axios({
      url: apiUrl + '/uploads',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.token}`
      },
      data,
      body: details
      // : data + `${user}`
    })
      .then((res) => {
        return (res)
      })
      .then(res => setUpload(res.data.upload))
      .then(() => setLoading(false))
      .catch(console.error)
  }
  // const updateChange = (event) => {
  //   this.setState({
  //     caption: [
  //       { caption: event.target.value }
  //     ]
  //   })
  // }
  return (
    <div>
      {upload.url
        ? (
          <img className='display-image' alt={upload.url} src={upload.url} />
        )
        : (
          ''
        )}
      {loading
        ? (
          <img
            className='display-loading'
            alt='loading gif'
            src='https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif'
          />
        )
        : (
          ''
        )}

      <Form onSubmit={handleSubmit} enctype='multipart/form-data'>

        <Form.Group
          controlId='formFile'
          className='mb-3'
          id='upload-file-input'>
          <Form.Label>Upload Your Pic Yo</Form.Label>
          <Form.Control type='file' onChange={handleChange} />
          {/* <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Caption</InputGroup.Text>
            <FormControl
              placeholder="Caption"
              aria-label="Caption"
              aria-describedby="basic-addon1"
            />
          </InputGroup> */}
          <Deets
            caption={caption}
            setCaption={setCaption}
            title={title}
            setTitle={setTitle}
          />
          <Button variant='primary' type='submit' value='Submit'>
Submit
          </Button>
        </Form.Group>
      </Form>
      <div>{/* <Thumbnail /> */}</div>
    </div>
  )
}
