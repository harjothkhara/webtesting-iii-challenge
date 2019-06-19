import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("<Controls />", () => {
    it("renders successfully", () => {
        render(<Controls />);
    });
});