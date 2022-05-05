import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { deletedImageSuccess } from './components/AutoDismissAlert/messages'

// import Thumbnail from './components/Body/Thumbnail'

// const FormData = require('form-data')

export default function Delete ({ user, msgAlert }) {
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

      .then((res) => {
        return (res)
      })
      .finally(() =>
        msgAlert({
          heading: 'Deleted Successfully',
          message: deletedImageSuccess,
          variant: 'success'
        })
      )
      .catch(console.error)
  }

  return (
    <div>
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
