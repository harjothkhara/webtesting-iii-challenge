import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
    it("renders successfully", () => {
        render(<Dashboard />);
    });
    it("locks successfully, and only when gate is closed", () => {
        const { getByText } = render(<Dashboard />);
        const lock = getByText(/Lock/);
        const gate = getByText(/Close/);
        fireEvent.click(lock);
        fireEvent.click(gate);
        fireEvent.click(lock);
        fireEvent.click(gate);
        getByText(/Locked/);
        getByText(/Closed/);
    });
});