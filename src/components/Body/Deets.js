import React from 'react'

export default function Deets (props) {
//   const [caption, setCaption] = React.useState('')
//   const [title, setTitle] = React.useState('')
  const { caption, setCaption, title, setTitle } = props
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleChangeCaption = (event) => {
    setCaption(event.target.value)
  }
  //  props is used to pull info from parent components
  // while referenceing information within the component no props are needed
  return (
    <div>
      <p>
        Title:<input type='text' name='title' value={title} onChange={handleChangeTitle}></input>
        <br></br>
        Caption:<input type='text' name='caption' value={caption} onChange={handleChangeCaption}></input>
      </p>
    </div>
  )
}
