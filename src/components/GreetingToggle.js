import { Component } from "react";

export default class GreetingToggle extends Component {
  constructor() {
    super();

    this.state = {
      toggledText: 'Hello'
      
    }
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      toggledText: ''
    })),
  }
}