import React,{Component} from 'react';
import CustomInputTextFunction from './CustomTextInputFunction';

class ParentRef extends Component{
    render(){
        return(
            <CustomInputTextFunction inputRef = {el=> this.inputElement = el }/>
        );
    }
}

export default ParentRef;