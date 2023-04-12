import { Component, useState } from "react";

export default function GreetingToggle() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className='GreetingToggle'>
      <div className="TextWrapper">
        <h1>{toggle ? "Hello there" : "General Kenobi"}</h1>
      </div>

      <div className="ButtonWrapper">
        <button onClick={() => setToggle((prevToggle) => !prevToggle)}>Toggle Me</button>
      </div>
    </div>
  )

}
