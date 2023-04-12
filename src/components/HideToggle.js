import { Component, useState } from "react";

export default function HideToggle() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='HideToggle'>
      <h1>{toggle ? "Hide Me" : ""}</h1>

      <button onClick={() => setToggle((prevToggle) => !prevToggle)}>{toggle ? "Hide" : "Show"}</button>

    </div>
  )

}
