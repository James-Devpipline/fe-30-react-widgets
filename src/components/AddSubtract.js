import { Component } from "react"

import AddSubtractControls from "./AddSubtractControls";

export default class AddSubtract extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }; 

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
  }
  
  handleAdd() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1
      }),
    );
  }

  handleSubtract() {
    if (this.state.count !== 0) {
      this.setState(
        (prevState) => ({
          count: prevState.count - 1
        }),
      );
    }
  }

  render() {
    return (
      <div className="add-subtract">
        <h1>{this.state.count}</h1>

        <AddSubtractControls
        handleAdd={this.handleAdd}
        handleSubtract={this.handleSubtract}/>
      </div>
    )
  }
}
