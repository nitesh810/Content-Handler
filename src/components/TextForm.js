import React, { useState } from 'react';
import '../index.css';

export default function TextForm(props) {
    // Convert text to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    // Convert text to lowercase
    const handleLoClick = () => { 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    // Clear the text area
    const handleClearClick = () => { 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    // Handle text change in the textarea
    const handleOnChange = (event) => {
        setText(event.target.value); 
    }

    // Remove extra spaces from the text
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/); // Split text by one or more spaces
        setText(newText.join(" ")); // Join the text with single spaces
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); // State to manage the text in the textarea

    return (
        <>
        {/* Main container for text input and controls */}
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}> 
            {/* Heading for the form */}
            <div className="container">
                <h1 className='mb-4'>{props.heading}</h1>
            </div>

            {/* Textarea for user input */}
            <div className="mb-3"> 
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    style={{
                        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', 
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }} 
                    id="myBox" 
                    rows="8">
                </textarea>
            </div>

            {/* Buttons for various text transformations */}
            <button 
                disabled={text.length === 0} 
                className="btn mleft my-1" 
                style={{background: props.mode === 'dark' ? 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)' : '#639af2'}} 
                onClick={handleUpClick}>
                <strong>Convert to Uppercase</strong>
            </button>
            <button 
                disabled={text.length === 0} 
                className="btn my-1" 
                style={{background: props.mode === 'dark' ? 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)' : '#639af2'}} 
                onClick={handleLoClick}>
                <strong>Convert to Lowercase</strong>
            </button>
            <button 
                disabled={text.length === 0} 
                className="btn pdng my-1" 
                style={{background: props.mode === 'dark' ? 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)' : '#639af2'}} 
                onClick={handleClearClick}>
                <strong>Clear Text</strong>
            </button>
            <button 
                disabled={text.length === 0} 
                className="btn my-1" 
                style={{background: props.mode === 'dark' ? 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)' : '#639af2'}} 
                onClick={handleExtraSpaces}>
                <strong>Remove Extra Spaces</strong>
            </button>
        </div>

        {/* Container for text summary and preview */}
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            {/* Word and character count */}
            <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
            {/* Estimated reading time */}
            <p>{0.008 *  text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
            {/* Preview of the entered text */}
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
        </>
    )
}
