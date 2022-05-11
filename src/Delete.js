// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import React, { useState } from 'react'
import React from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import { deletedImageSuccess, deletedImageFailure } from './components/AutoDismissAlert/messages'

export default function Delete ({ user, msgAlert, id }) {
  // const handleChange = (event) => {
  //   setImageId(event.target.value)
  // }
  // const [imageId, setImageId] = useState('')

  const handleSubmit = (event) => {
    axios({
      url: apiUrl + `/delete/${id}`,
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
      .catch((error) => {
        msgAlert({
          heading: 'Delete Failed with error: ' + error.message,
          message: deletedImageFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <div>
      {/*
      {/* <Form onSubmit={handleSubmit}>
        <Form.Group
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
      </Form> */}

      <div>
        {/* <input id="imageId" onChange={handleChange} type="text" value={imageId}></input> */}
        <button value="submit" onClick={handleSubmit}>Delete</button>
      </div>
    </div>
  )
}
