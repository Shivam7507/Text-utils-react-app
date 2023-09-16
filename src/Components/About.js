import React from "react";

export default function About(props) {

  // const [myStyle, stMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    // border:"1px solid",
    // borderColor:props.mode === "dark" ? "white" : "black",
  };
  // const [btnText, setBtnText] = useState("Enable dark Mode");

  // const toggleStyle =()=>{
  //   if(myStyle.color==='black'){
  //       stMyStyle({
  //           color: "white",
  //           backgroundColor: "black",
  //           border: '1px solid wite'
            
  //       })
  //       setBtnText("Enable Light Mode")
  //   }
  //   else{
  //       stMyStyle({
  //           color: "black",
  //           backgroundColor: "white"
  //       })
  //       setBtnText("Enable Dark Mode")
  //   }
  // }

  return (
    <div className="container" >
      <h1 className="my-3" style={{color: props.mode === "dark" ? "white" : "#042743"}}><strong>About</strong> </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Text Utils is a web-based utility designed to assist users in analyzing and processing text. Whether you need to examine the content of a text document, manipulate text data, or gain insights from textual information, Text Utils has you covered.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Completely Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Text Utils is a free online utility designed to help you analyze and process text. We believe in making text analysis accessible to everyone, which is why our service is entirely free to use. You can enjoy all of our features without any subscription fees or hidden charges
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Developed by Shivam</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            I am computer science undergraduate, who is Passionate about learning new things and technology to build something amazing.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
