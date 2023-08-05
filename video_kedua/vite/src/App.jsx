import { useState } from 'react'
import ButtonLike from "./ButtonLike.jsx";

function Salam({ nama }) {
  return (<h1 >Hai nama saya {nama ? nama : "aiman"}</h1>)
}

function List() {
  const data = ["man", "budiman", "geming"]
  return (
    <>
      <ul>{data.map((data) => (<li key={data} >{data}</li>))}</ul>
    </>
  )
}




function App() {
  
  return (
    <>
      <ButtonLike />
      <Salam nama="budiman" />
      <h1>Budi</h1>
      <Salam />
      <List />
    </>
  )
}

export default App
