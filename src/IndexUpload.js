
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import apiUrl from './apiConfig'
import Delete from './Delete'
import Update from './Update'

export default function IndexUpload ({ msgAlert, user }) {
  const [uploads, setUploads] = useState([])
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    axios({
      method: 'GET',
      url: apiUrl + '/all-images',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then((res) => {
        // console.log(Object.values(res.data.uploads))
        // return (Object.values(res.data.uploads))
        console.log(res)
        return res
      })

      .then((res) => {
        // console.log(res)
        console.log(res)
        setUploads(res.data)
        // .then(() => setLoading(false))
      })
      .catch(console.error)
  }, []
  )

  if (uploads.length < 1) {
    return (
      <h1>loading...</h1>
    )
  } else {
    console.log(uploads)
    const uploadJSX = uploads.map((upload) => (
      <div key={upload._id}>
        <img className='image--index' src={upload.url} />
        {/* <li>Owner ID: {upload.owner}</li> */}
        <li>{upload.title}</li>
        <li>{upload.caption}</li>
        {/* <li>Upload ID: {upload._id}</li> */}
        <Update id={upload._id} user={user} msgAlert={msgAlert} />
        <Delete id={upload._id} user={user} msgAlert={msgAlert} />
      </div>
    ))

    return (
      <div>
        {/* {uploads ? ({ uploadJSX }) : ('')}
      {loading ? (<img className='display-loading' alt='loading gif' src='https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif' />) : ('')} */}
        <h4>My Uploads!</h4>
        <h3>{uploadJSX}</h3>
      </div>
    )
  }
}
