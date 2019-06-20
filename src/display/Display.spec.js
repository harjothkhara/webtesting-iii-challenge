import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";
import renderer from 'react-test-renderer'; 

import Display from "./Display";

describe("<Display />", () => {
    it("renders successfully", () => {
        render(<Display />);
    });
    it('Should match snapshot', () => {
        const tree = renderer.create(<Display />).toJSON(); 
        expect(tree).toMatchSnapshot(); 
    })

    it('displays unlocked by default', () => {
        const { getByText } = render(<Display />); 
        getByText('Unlocked');
    });

    it('displays open by default', () => {
        const { getByText } = render(<Display />); 
        getByText('Open');
    });
});