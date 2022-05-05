
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function Update ({ user, props }) {
  const { imageId, setImageId, imageTitle, setImageTitle, imageCaption, setImageCaption } = props

  const handleChangeId = (event) => {
    setImageId(event.target.value)
  }
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

      title: { imageTitle },
      caption: { imageCaption }

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
          <input id="imageId" name="imageId" onChange={handleChangeId} type="text" placeholder="image ID"value={imageId}></input>
          <input id="imageId" name="imageTitle" onChange={handleChangeTitle} type="text" placeholder="new Title" value={imageTitle}></input>
          <input id="imageId" name="ImageCaption" onChange={handleChangeCaption} type="text" placeholder="new Caption" value={imageCaption}></input>
          <button value="submit" onClick={handleSubmit}>Update</button>
        </div>
      </div>
    )
  }
}
