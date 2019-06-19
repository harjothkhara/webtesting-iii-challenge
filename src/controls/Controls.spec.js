import React from 'react';
import { ReactDOM } from "react-dom";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from "./Controls";

describe("<Controls />", () => {
    it("renders successfully", () => {
        render(<Controls />);
    });
});