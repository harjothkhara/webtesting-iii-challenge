import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";
import renderer from 'react-test-renderer'; 

import Controls from "./Controls";
import Dashboard from '../dashboard/Dashboard'; 

describe("<Controls />", () => {
    it("renders successfully", () => {
        render(<Controls />);
    });
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON(); 
        expect(tree).toMatchSnapshot(); 
    });

    it('renders expected initial state', () => {
        const { getByText } = render(<Dashboard />); 
        getByText('Close Gate');
        getByText('Lock Gate'); 
    });
});