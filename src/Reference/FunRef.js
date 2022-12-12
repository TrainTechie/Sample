import React from "react";
function FunRef(){
    const textInput=React.useRef(null);
    function handleClick(){
        textInput.current.focus()
    }
    return (
        <div>
          <input type="text" ref={textInput} />
          <input type="button" value="Focus the text input"
            onClick={handleClick} />
        </div>
      );
    }
export default FunRef