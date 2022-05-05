import axios from 'axios'
import React, { useState } from 'react'
import apiUrl from './apiConfig'

export default function IndexUpload ({ user }) {
  const [uploads, setUploads] = useState([])
  // const [loading, setLoading] = useState(false)

  axios({
    method: 'GET',
    url: apiUrl + '/uploads',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
    .then((res) => console.log(res.data))
    .then((res) => setUploads({ uploads: res.data.uploads }))
    // .then(() => setLoading(false))
    .catch(console.error)

  const uploadJSX = uploads.map(upload => (
    <div key={upload._id}>
      <p>Thumbnail Here</p>
      <li key={upload._id}>
        {upload.title}
      </li>
      <li key={upload._id}>
        {upload.caption}
      </li>
      <li>placeholder info for items with no title/caption</li>
    </div>
  ))

  return (
    <div>
      {/* {uploads ? ({ uploadJSX }) : ('')}
      {loading ? (<img className='display-loading' alt='loading gif' src='https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif' />) : ('')} */}
      <h4>My Uploads!</h4>
      <>{uploadJSX}</>
    </div>
  )
}
