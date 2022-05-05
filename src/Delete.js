import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
// import Thumbnail from './components/Body/Thumbnail'

// const FormData = require('form-data')

export default function Upload ({ user }) {
  // const [selected, setSelected] = useState(null)
  // const [upload, setUpload] = useState({})
  // const [loading, setLoading] = useState(false)
  // const [user, setUser] = useState(user)

  const handleChange = (event) => {
    setImageId(event.target.value)
  }
  const [imageId, setImageId] = useState('')

  const handleSubmit = (event) => {
    // event.preventDefault()
    // data.append('delete', selected)

    axios({
      url: apiUrl + `/delete/${imageId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })

    // axios({
    //   url: apiUrl + '/uploads',
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${user.token}`
    //   },
    //   data
    //   // : data + `${user}`
    // })
      .then((res) => {
        console.log('deleted')
        return (res)
      })
      // .then(res => setUpload(res.data.upload))
      // .then(() => setLoading(false))
      .catch(console.error)
  }

  //   const handleDelete = (event) => {
  //     console.log(event)
  //     console.log(document.getElementById('imageId'))
  //     const imageValue = document.getElementById('imageId').value

  //     setImageId(imageValue)
  //     handleSubmit()
  //   }
  return (
    <div>
      {/* {upload.url
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
        )} */}
      <Form onSubmit={handleSubmit}>
        <Form.Group
          controlId='formFile'
          className='mb-3'
          id='upload-file-input'>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Enter Image ID to delete.</InputGroup.Text>
            <FormControl
              placeholder="Image ID"
              aria-label="Caption"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button variant='primary' type='submit' value='Submit'>
            Delete
          </Button>
        </Form.Group>
      </Form>
      <div>
        <input id="imageId" onChange={handleChange} type="text" value={imageId}></input>
        <button value="submit" onClick={handleSubmit}>Kill</button>
      </div>
    </div>
  )
}
