/* eslint-disable no-tabs */
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
// import { Route } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
// import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
// import Header from './components/Header/Header'
// import SignUp from './components/auth/SignUp'
// import SignIn from './components/auth/SignIn'
// import SignOut from './components/auth/SignOut'
// import ChangePassword from './components/auth/ChangePassword'

const FormData = require('form-data')

function App () {
  const [selected, setSelected] = useState(null)
  const [upload, setUpload] = useState({})
  const [loading, setLoading] = useState(false)

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
      data
    })
      .then(res => setUpload(res.data.upload))
      .then(() => setLoading(false))
      .catch(console.error)
  }
  // [selected, setSelected] = useState(null)
  //  handleChange = (event) => {
  //    console.log(event.target.files[0])
  //    setSelected(event.target.files[0])
  //  }
  // componentDidMount () {
  //   console.log('Kiss it')
  // }

  // setUser = (user) => this.setState({ user })

  // clearUser = () => this.setState({ user: null })

  // deleteAlert = (id) => {
  //   this.setState((state) => {
  //     return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
  //   })
  // }

  // msgAlert = ({ heading, message, variant }) => {
  //   const id = uuid()
  //   this.setState((state) => {
  //     return {
  //       msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
  //     }
  //   })
  // }

  // const { msgAlerts, user } = this.state

  return (

    <div className="App">
      {upload.url ? (<img className="display-image" alt={upload.url} src={upload.url} />) : ''}
      {loading ? (<img className="display-loading" alt="loading gif" src="https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif"/>) : ''}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFile" className="mb-3" id="upload-file-input" >
          <Form.Label>Upload Your Pic Yo</Form.Label>
          <Form.Control type="file" onChange={handleChange} />
          <Button variant="primary" type="submit" value="Submit" >Submit</Button>
        </Form.Group>
      </Form>
    </div>

  )
}

export default App
