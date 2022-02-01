import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=>{
        setText("");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const[text, setText] = useState("");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" row="8"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleClear}>Clear</button>
                <div className='my-3'>
                    <h2>Words and Characters</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                </div>
                <div>
                    <h2>Preview</h2>
                    <p>{text.length===0?"write something in the box above to see the preview":text}</p>
                </div>
        </div>
    )
}
