import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CustomTextInput from './components/customTextInput';//This is for adding ref to DOM element
import AutoFocusTextInput from './components/AutoFocusTextInput'; //This is for adding ref to Class Component
import CustomTextInputCallbackRef from './components/CustomTextInputCallbackRef';//This is for callback refs
import ParentRef from './components/ParentRef'; //This is for ref callbacks between components
import TextInputWithFocusButton from './components/TextInputWithFocusButton';//This is for useRef hook
import Button from './components/button/Button'; //This is for Jest and React Testing Libraries
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomTextInput/>{/**This is for adding Ref to DOM element*/}
        <AutoFocusTextInput />{/*This is for adding Ref to class Component*/}
        <CustomTextInputCallbackRef />{/**This is for callback refs */}
        <ParentRef /> {/**This is for ref callbacks between compenents */}
        <TextInputWithFocusButton />{/**This is for useRef hook */}
        <Button label="Click me Please!"/>{/**This is for Jest and React Testing Libraries */}
        </header>
    </div>
  );
}

export default App;
