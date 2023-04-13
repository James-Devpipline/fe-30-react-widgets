import { Component, useState } from "react";

export default function ShowHideToggle() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='HideToggle'>
      <div className="TextWrapper">
        <h1>{toggle ? "Hide Me" : ""}</h1>
      </div>

      <div className="ButtonWrapper">
        <button onClick={() => setToggle((prevToggle) => !prevToggle)}>{toggle ? "Hide" : "Show"}</button>
      </div>
    </div>
  )

}
