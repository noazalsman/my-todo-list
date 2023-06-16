import React, { useState } from "react";
import "./Input.css";

const Input = ( props ) => {
    const [input, setInput] = useState("");

  return (
      <div className={"input_container"}>
          <div className="input-group mb-3">
              <input type="text" className="form-control" value={input} placeholder="Add a task..." aria-label="task" aria-describedby="button-addon2" onChange={(e) => setInput(e.target.value)}/>
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {
                      props.OnAddTask(input)
                      setInput("")}
                  }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-plus-lg" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                      </svg>
                  </button>
          </div>
      </div>
  );
}

export default Input;