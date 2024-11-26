import React from 'react';

export default function About(props) {
    // Dynamic styling based on the current mode (dark or light)
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743', // Text color
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', // Background color
    };

    return (
        <div className="container">
            {/* Main heading with dynamic color styling */}
            <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            
            {/* Accordion component for displaying collapsible sections */}
            <div className="accordion" id="accordionExample">

                {/* First accordion item: Analyze Your Text */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            style={myStyle} // Dynamic styling
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
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            "Content Handler gives you a quick and efficient way to analyze your text, whether it's counting words, characters, or estimating reading time. Simplify your text processing with ease!"
                        </div>
                    </div>
                </div>

                {/* Second accordion item: Free to Use */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle} // Dynamic styling
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Content Handler is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>

                {/* Third accordion item: Browser Compatible */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle} // Dynamic styling
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blogs, books, Excel documents, PDF documents, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}