import React from 'react';

function CustomTextInputFunction(props){
    return(
        <div>
            <input ref={props.inputRef}/>
        </div>
    );
}

export default CustomTextInputFunction;