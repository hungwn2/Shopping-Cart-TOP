import React from 'react';
import { render, screen } from '@testing-library/react';
import Shop from '../components/Shop';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


describe('Shop tests', ()=>{
    it ('matches snapshot', ()=>{
        const {asFragment}=render(
            <BrowserRouter>
                <Shop totalPrice={50} add={jest.fn()}/>
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders total value', ()=>{
        render(
            <BrowserRouter>
            <Shop totalPrice={50} add={jest.fn()}/>
        </BrowserRouter>
        );
        const valueDiv=screen.getByTestId('totalValue');
        expect(valueDiv).toHaveTextContent('$50 total'); 
    });

    it('renders number of items', ()=>{
        render(
            <BrowserRouter>
            <Shop items={6} totalPrice={50} add={jest.fn()}/>
        </BrowserRouter>
        );
        const valueDiv=screen.getByTestId('totalItems');
        expect(valueDiv).toHaveTextContent('6');
    });
});