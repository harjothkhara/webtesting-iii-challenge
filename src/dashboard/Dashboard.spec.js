import React from 'react';
import { ReactDOM } from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
    it("renders successfully", () => {
        render(<Dashboard />);
    });
});