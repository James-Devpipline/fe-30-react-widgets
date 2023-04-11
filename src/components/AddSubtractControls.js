export default function AddSubtractControls(props) {
  return (
    <>
      <button onClick={props.handleAdd}>Add</button>
      <button onClick={props.handleSubtract}>Subtract</button>
    </>
  )
  }