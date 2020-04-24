import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Login from '../Components/form_login'

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
})


it("renders without error message", () => {
    act(() => {
        render(<Login />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");

})