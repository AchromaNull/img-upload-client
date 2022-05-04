import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { data } from 'autoprefixer'

export default function Gallery () {
  const [pics, setPics] = useState([])

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com.posts')
    axios({
      url: apiUrl + '/uploads',
      method: 'GET',
      data
    })
      .then(res => {
        console.log(res)
        setPics(res.data.upload)
      })
      .catch(err => {
        console.log(err)
      })
    //   removed ,[]
  }, [])
  return (
    <div>

      {pics.map((pics) => (
        <li key={pics.id}>{pics.url}</li>
      ))}

    </div>
  )
}

// const [info, setInfo] = useState([])
// const [things, setThings] = useState(null)

// useEffect(async () => {
// const response = await fetch('')
// const pics = await response.json()
// const [item] = res.data.upload
// setThings(item)
// }, [])

// return <div>{things && <div>{things}</div>}</div>
// -=-------------------------------
//  return (
//     const indexCall = (event) => {
//     setSelected(event.target.files[0])
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     setLoading(true)
//     const data = new FormData()
//     data.append('upload', selected)
// axios({
//   url: apiUrl + '/uploads',
//   method: 'POST',
//   data
// })
//       .then((res) => {
//         console.log(upload.url)
//         console.log(res.data.upload._id)
//         return (res)
//       })
//       .then(res => setUpload(res.data.upload))
//       .then(() => setLoading(false))
//       .catch(console.error)
//   }
//   )
