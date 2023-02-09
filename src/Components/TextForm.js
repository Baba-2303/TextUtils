import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("The button was clicked!" , text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UPPERCASE!","success");
    }
    const handleLowClick = () => {
        // console.log("The button was clicked!" , text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleCopyClick = () => {
        let txtarea = document.getElementById("myBox");
        txtarea.select();
        navigator.clipboard.writeText(txtarea.value);
        props.showAlert("Text copied to the Clipboard!","success");

    }
    const handleClearClick = () => {
        // console.log("The button was clicked!" , text);
        let newtext = "";
        setText(newtext)
        props.showAlert("Text Cleard!","success")
    }
    const handleCipherClick = () => {
        // console.log("The button was clicked!" , text);
        let textcopy = text.toLowerCase();
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let alphacipher = "defghijklmnopqrstuvwxyzabc";
        let newtextstr = "";
        for(let i=0;i<textcopy.length;i++){
            for(let j=0;j<alphabet.length;j++){
                if(textcopy[i]===alphabet[j]){
                    newtextstr+=alphacipher[j];
                }
            }
        }
        setText(newtextstr);
        props.showAlert("Converted to Cipher Text","success");
    }
    const handlePlaneClick = () => {
        // console.log("The button was clicked!" , text);
        let textcopy = text.toLowerCase();
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let alphacipher = "defghijklmnopqrstuvwxyzabc";
        let newtextstr = "";
        for(let i=0;i<textcopy.length;i++){
            for(let j=0;j<alphacipher.length;j++){
                if(textcopy[i]===alphacipher[j]){
                    newtextstr+=alphabet[j];
                }
            }
        }
        setText(newtextstr);
        props.showAlert("Converted to Plane Text","success");

    }
    const handleOnChange = (event) => {
        // console.log("On-change");
        setText(event.target.value);
    }

    const [text,setText] = useState("");

  return (
    <>
    <div className='container my-3'>

        <h1 className={`text-${props.txtColor}`}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" placeholder="Enter text here!" rows="7" style={{backgroundColor: props.mode==="dark"?"#6e6565":"white",color: props.mode==="dark"?"white":"black"}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert To UPPERCASE!</button>
        <button className="btn btn-success mx-1 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert To lowercases!</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-info text-light mx-1 my-1" disabled={text.length===0} onClick={handleCipherClick}>Plane text to Caesar Cipher</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text.length===0} onClick={handlePlaneClick}>Caesar Cipher to plane text</button>
        <button className="btn btn-warning text-light mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear all text?</button>
    </div>
    <div className={`container my-3 text-${props.txtColor}`}>
        <h2>Your Text Summery</h2>
        <p>{text.split(/[\s,.]+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(/[\s,.]+/).filter((element)=>{return element.length!==0}).length} minute read(approx)</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading : PropTypes.string
}
TextForm.defaultProps = {
    heading : "Enter The Text Below"
}

