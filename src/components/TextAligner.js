import { useState } from "react"

export default function TextAligner() {
  const [alignment, setAlignment] = useState("center")

  return (
    <div className="TextAligner">
      <div className="Text" style={{"justifyContent": alignment}}>
        <h1>Push me around with them buttons</h1>
      </div>

      <div className="TextAlignButtons">
        <button onClick={() => setAlignment((prevAlignment) => (prevAlignment = "flex-start"))}>Left</button>

        <button onClick={() => setAlignment((prevAlignment) => (prevAlignment = "center"))}>Center</button>

        <button onClick={() => setAlignment((prevAlignment) => (prevAlignment = "flex-end"))}>Right</button>
      </div>
    </div>
  )
}