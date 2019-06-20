import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import Controls from '../controls/Controls';

describe("<Dashboard />", () => {
    it("renders successfully", () => {
        render(<Dashboard />);
    });
    it('matches the snapshot', () => {
        const { container }= render(<Dashboard />); 
        expect(container.firstChild).toMatchSnapshot(); 
    });
    //making sure that controls and displays render
    it('renders controls and display', () => {
        render(<Dashboard />);
        // everything that is not 0, “”, null, undefined, NaN or false is truthy.
        expect(document.querySelector('.controls')).toBeTruthy();
        expect(document.querySelector('.display')).toBeTruthy(); 
    });

    it("gate opens and closes successfully when unlocked", () => {
        const { getByText } = render(<Dashboard />);
        const gate = getByText(/Close/); 
        fireEvent.click(gate);
        fireEvent.click(gate);
        fireEvent.click(gate);
        fireEvent.click(gate);
        getByText(/Open/);
    });
    it("gate locks successfully", () => {
        const { getByText } = render(<Dashboard />);
        const lock = getByText(/Lock/);
        const gate = getByText(/Close/);
        fireEvent.click(gate);
        fireEvent.click(lock);
        getByText(/Locked/);
        getByText(/Closed/);
    });
    it("gate locks and unlocks successfully", () => {
        const { getByText } = render(<Dashboard />);
        const lock = getByText(/Lock/);
        const gate = getByText(/Close/);
        fireEvent.click(gate);
        fireEvent.click(lock);
        fireEvent.click(lock);
        getByText(/Unlocked/);
        getByText(/Closed/);
    });
    it("locks only when the gate is closed, opens only when unlocked", () => {
        const { getByText } = render(<Dashboard />);
        const lock = getByText(/Lock/);
        const gate = getByText(/Close/);
        fireEvent.click(lock);
        fireEvent.click(gate);
        fireEvent.click(lock);
        fireEvent.click(gate);
        getByText(/Locked/);
        getByText(/Closed/);
    })
    
});