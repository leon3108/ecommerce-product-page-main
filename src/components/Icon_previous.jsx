import React from 'react';
import '../styles/Icon_previous.css'

const iconPrevious = () => {
    return (
        <div id="icon-previous" onClick={() => {console.log("click")}}>
            <svg xmlns="http://www.w3.org/2000/svg" id="svg">
                <path d="M11 1 3 9l8 8"/>
            </svg>
        </div>
      );
}

export default iconPrevious;