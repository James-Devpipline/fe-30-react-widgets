import { useState } from "react"

export default function FontSizer() {
  const [fSize, setFSize] = useState(50)
  return (
    <div className="FontSizer">
      <div className="TextWrapper">
        <p style={{"fontSize" : fSize}}>{fSize}px</p>
      </div>

      <div className="ButtonWrapper">
        <button onClick={() => {
          if (fSize !== 115) {
            setFSize((i) => (i + 5))}
          }}>Grow</button>

        <button onClick={() => {
          if(fSize !== 5) {
            setFSize((i) => (i - 5))}
            
          }}>Shrink</button>

      </div>
  </div>
    )
}