import React,{Component} from 'react';

class CustomInputText extends Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput(){
        console.log("The value of current here is "+this.textInput.current);
        this.textInput.current.focus();
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.textInput}/>
                <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
            </div>
        );
    }
}

export default CustomInputText;