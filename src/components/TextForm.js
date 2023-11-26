import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success")
    }

    const handleLoClick = () => {
        console.log("uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lppercase" , "success")
    }

    const handleExtraSpace = () => {
        console.log("uppercase was clicked" + text)
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space cleared" , "success")
    }


    const handleClearClick = () => {
        console.log("uppercase was clicked" + text)
        let newText = " ";
        setText(newText)
        props.showAlert("text is cleared" , "success")
    }

    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is cpoied" , "success")
    }

    const handleOnChange = (event) => {
        // console.log("ON CHANGE")
        setText(event.target.value)
    }

    const [text, setText] = useState('');


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Mintues read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text : 'Enter something in the text box above to preview here'}</p>

            </div>
        

        </>
    )
}
