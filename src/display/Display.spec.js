import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display />", () => {
  it("renders successfully", () => {
    render(<Display />);
  });
});