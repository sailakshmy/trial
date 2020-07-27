import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../Button';
//import {isTSAnyKeyword} from '@babel/types';
import {render,cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup);
it ("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div);
});

it("renders button correctly",()=>{
    const {getByTestId} = render(<Button label="Click me Please"/>);
    expect(getByTestId('button')).toHaveTextContent("Click me Please");
});

it("renders button correctly",()=>{
    const {getByTestId} = render(<Button label="Save"/>);
    expect(getByTestId('button')).toHaveTextContent("Save");
});

it("matches snapshot 1",()=>{
    const tree = renderer.create(<Button label="Save" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot 2",()=>{
    const tree = renderer.create(<Button label="Click me Please"/>).toJSON();
    expect(tree).toMatchSnapshot();
});