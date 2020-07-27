import React, {Component} from 'react';

class CustomTextInputCallbackRef extends Component{
    constructor(props){
        super(props);
        this.textInput =  null;
        this.setTextInputRef = element =>{
            console.log("Element= "+ element);
            this.textInput = element;
        };
        this.focusTextInput=()=>{
            if(this.textInput)
                this.textInput.focus();
        };
    }
    componentDidMount(){
        this.focusTextInput();
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.setTextInputRef}/>
                <input type="button" value="Focus the text Input" onClick={this.focusTextInput}/>
            </div>
        );
    }
}
export default CustomTextInputCallbackRef;