
import React, { useState } from 'react';

export default function TextForm(props) {
  // const convertToUpperCase = () => {
  //     console.log(text);
  //     // let newText = text.toUpperCase();
  //     setText(text.toUpperCase());
  // };
  function convertToUpperCase(){
    setText(text.toUpperCase());
  }

  function enteredString(event){
      setText(event.target.value);
  }
  // function darkMode(){
  //   if (btn == 'Enable Dark Mode') {
  //     setMyStyle({
  //       backgroundColor: 'black',
  //       color: 'white'
  //     });
  //     setBtn("Enable Light Mode");
  //   }
  //   else{
  //     setMyStyle({
  //       backgroundColor: 'white',
  //       color: 'black'
  //     });
  //     setBtn("Enable Dark Mode");
  //   }
  // }
// stylesheet
  // const [sty, setSty] = useState('../Components/TextForm.css');

// for text
  const [text, setText] = useState('Enter Text here');

  // for inline style
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: 'white',
  //   color: 'black'
  // });

  // const [btn, setBtn] = useState('Enable Dark Mode');

  return (
    <>
{/* style={myStyle} */}
    <div className='container my-3' style={props.myStyle} >
        <h2>{props.Heading}</h2>
         <div className="mb-3">
            <label  className="form-label">textarea</label>
            <textarea className="form-control" style={props.myStyle} value={text} onChange={enteredString} id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>
          <button className='btn btn-danger my-1 mx-1' onClick={convertToUpperCase}> To UpperCase </button>
    </div>
    <div className='container my-3' style={props.myStyle}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").filter((element) =>{return element.length!==0}).length} No. Of Words , {text.length} No. Of characters</p>
        <p> {0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>   
    </div>
    {/* <div className='container my-3' style={myStyle}>
      <button className='btn btn-success' onClick={darkMode}>{btn}</button>
    </div> */}

    </>
  )
}
