import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UperCase Was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    // console.log("UperCase Was Clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase", "success")

  };

  const handleClickClere = () => {
    // console.log("UperCase Was Clicked"+ text);
    let newText = " ";
    setText(newText);
    props.showalert("Text is cleared", "success")

  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("i am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied to Clipboed", "success")

  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra space is removed", "success")

  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.textarea}
          </label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(8 42 69)" : "white",color:props.mode==='dark'?'white':'black'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To UperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClickClere}>
          Clere Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>
          HandleSpace
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summery</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minuts to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
