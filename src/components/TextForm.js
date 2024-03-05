import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Upper Case", "success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lower Case", "success");
  }
  const handleClearClick =() => {
    setText('');
    setBold(false);
    setItalic(false);
    props.showAlert("Text has been cleared", "success");
  }
  const handleCopyClick = () => {
    var copyText = document.getElementById("myTextBox");
    copyText.select();
    // copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
    props.showAlert("Text has been copied", "success");
  }
  const handleNewLineClick = () => {
  //write code to convert new line in text area to space
  let newText = text.replace(/\n/g, " ");
  setText(newText);
  props.showAlert("New lines have been removed", "success");
  }

  const handleBoldClick = () => {
    //write code to convert text to bold
    if(bold){
      setBold(false);
    }else{
      setBold(true);
    }
    props.showAlert("Bold has been enabled", "success");
  }

  const handleItalicClick = () => {
    //write code to convert text to italic
    if(italic){
      setItalic(false);
    }else{
      setItalic(true);
    }
    props.showAlert("Italic has been enabled", "success");
  }

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed", "success");
  }
  return (
    <>
    <div className= "container" style={{color : props.mode == 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  style={{ fontWeight: bold ? 'bold' : 'normal' ,fontStyle: italic ? 'italic' : 'normal', color : props.mode === 'dark'? 'white' : '#042743' , backgroundColor : props.mode === 'dark'? 'grey' : 'white'}} 
  value={text} onChange={handleOnChange} id="myTextBox" rows="10"></textarea>
</div>
<div className="container my-3">
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>

<button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>

<button className="btn btn-primary mx-2 my-2" onClick={handleNewLineClick}>Convert New lines to Space</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
  </div>

<button className="btn btn-primary mx-2 my-2" onClick={handleBoldClick}>Bold</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleItalicClick}>Italics</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpacesClick}>Remove Extra spaces</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
    <div className="container my-3" style={{color : props.mode == 'dark' ? 'white' : '#042743'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text : "Enter something in the above textbox to preview it below"}</p>
      </div>

    </div>
    </>
  )
}


TextForm.propTypes = { heading : PropTypes.string}


TextForm.defaultProps = { heading : 'Enter your text here'}