import React from 'react';
import {render,fireEvent, screen} from "@testing-library/react";
import Home from "../components/Home";
import ReactDOM from 'react-dom'

// test for Home component
it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div)
})

it("renders correctly", () =>{
    const {queryByTitle} = render(<Home />)
    const btn = queryByTitle("Home component")
    expect(btn).toBeTruthy();
})

it("renders correctly", () =>{
    const {queryByTestId} = render(<Home />)
    expect(queryByTestId("Home")).toBeTruthy();
})
