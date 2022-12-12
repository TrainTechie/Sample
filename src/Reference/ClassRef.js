import React from "react";
export default class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
     focusTextInput() {
        this.textInput.current.focus();
    }
     render() {
          return (
        <div>
          <input type="text" ref={this.textInput} />
          <input type="button" value="Focus the text input"
            onClick={this.focusTextInput} />
        </div>
      );
    }
  }