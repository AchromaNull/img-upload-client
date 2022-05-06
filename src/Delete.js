// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import { deletedImageSuccess } from './components/AutoDismissAlert/messages'

export default function Delete ({ user, msgAlert }) {
  const handleChange = (event) => {
    setImageId(event.target.value)
  }
  const [imageId, setImageId] = useState('')

  const handleSubmit = (event) => {
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
      <div>
        <input id="imageId" onChange={handleChange} type="text" value={imageId}></input>
        <button value="submit" onClick={handleSubmit}>Kill</button>
      </div>
    </div>
  )
}
