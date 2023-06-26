import React, { useState } from "react";

export default function Form(props) {
  const myStyle = {
    marginTop: "5%",
    marginRight: "10%",
    marginLeft: "10%",
  };

  const btnstyle = {
    margin: "2%",
  }

  const copy = () =>{

    var text = document.getElementById("email");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied...", "success");

    }
   
  const up = () => {
    const uptext = text.toUpperCase();
    changetext(uptext);
    props.showAlert("Upper Case...", "Success");
  };
  const lo = () => {
    const uptext = text.toLowerCase();
    changetext(uptext);
    props.showAlert("lower Case...", "Success");
  };

  const onchangehandle = (event) => {
    changetext(event.target.value);
  };
  const [text, changetext] = useState(null);
  return (
    <>

      <form style={myStyle}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        
        <button onClick={copy} type="button" class="btn btn-primary">
          Submit
        </button>

        <label></label>
      </form>
      <div style={myStyle}>
      <div class="mb-3">

        <form>
          <label className="form-label">Enter Text here :</label>
          <input className="form-control" value={text} onChange={onchangehandle} />

          <button style={btnstyle} type="button" onClick={up} className="btn btn-primary">
            upper-case
          </button>
          <button style={btnstyle} type="button" onClick={lo} className="btn btn-primary">
            lower-case
          </button>
        </form>
      </div>
      </div>
    </>
  );
}
