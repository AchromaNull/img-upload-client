import Form from 'react-bootstrap/Form'

// import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
// import Thumbnail from './components/Body/Thumbnail'

// const FormData = require('form-data')

export default function Update ({ user, id, msgAlerts }) {
  // const [imageId, setImageId] = useState(null)
  const [imageTitle, setImageTitle] = useState('')
  const [imageCaption, setImageCaption] = useState('')

  // const handleChangeId = (event) => {
  //   setImageId(event.target.value)
  // }
  const handleChangeTitle = (event) => {
    setImageTitle(event.target.value)
  }
  const handleChangeCaption = (event) => {
    setImageCaption(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // data.append('delete', selected)
    const updateData = {

      title: imageTitle,
      caption: imageCaption

    }
    console.log(updateData)
    axios({
      url: apiUrl + `/uploads/${id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${user.token}`
      },
      data: { updateData }
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
        console.log('Updated')
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

      <Form onSubmit={handleSubmit}>
        <Form.Group
          controlId='formFile'
          className='mb-3'
          id='upload-file-input'>
          <InputGroup className="mb-3">
            {/* <InputGroup.Text id="basic-addon1">Enter Image ID to delete.</InputGroup.Text> */}
            {/* <FormControl
              placeholder="Image ID"
              aria-label="Caption"
              aria-describedby="basic-addon1"
            /> */}
          </InputGroup>
          {/* <Button variant='primary' type='submit' value='Submit'>
            Delete
          </Button> */}
        </Form.Group>
      </Form>
      <div>
        {/* <input id="imageId" name="imageId" onChange={handleChangeId} type="text" placeholder="image ID"value={id}></input> */}
        <input id="imageId" name="imageTitle" onChange={handleChangeTitle} type="text" placeholder="new Title" value={imageTitle}></input>
        <input id="imageId" name="ImageCaption" onChange={handleChangeCaption} type="text" placeholder="new Caption" value={imageCaption}></input>
        <button value="submit" onClick={handleSubmit}>Update</button>
      </div>
    </div>
  )
}
