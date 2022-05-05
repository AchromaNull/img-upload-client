import axios from 'axios'
import React from 'react'
import apiUrl from './apiConfig'

export default function IndexUpload ({ user }) {
  // const [uploads, setUploads] = useState({})

  axios({
    method: 'GET',
    url: apiUrl + '/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
    .then((res) => console.log(res))
    .catch(console.error)

  return (
    <div>
      <p>Alllll my uploads!</p>
    </div>
  )
}
