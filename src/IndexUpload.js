import axios from 'axios'
import React, { useState } from 'react'
import apiUrl from './apiConfig'

export default function IndexUpload ({ user }) {
  // const [uploads, setUploads] = useState({})

  axios({
    method: 'GET',
    url: apiUrl + '/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
      .then(console.log('hello'))
      .catch(console.error)
  })

  return (
    <div>
      <p>Alllll my uploads!</p>
    </div>
  )
}
