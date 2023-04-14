import { useState } from "react"

export default function ColorChanger() {
  const [textColor, setTextColor] = useState("red")
  const appendColor = (i) => {
    setTextColor((prevTextColor) => (prevTextColor = i))
  }
  
  return (
    <div className="ColorChanger">
      <div className="TextWrapper">
        <p style={{"color" : textColor}}>{textColor}</p>
      </div>

      <div className="ButtonWrapper">
        <input onChange={(event) => setTextColor(event.target.value)}
        value = {textColor}/>

        <button onClick={appendColor} >Do it</button>

      </div>
  </div>
  )
}