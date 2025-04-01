import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../components/Item';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Item tests', ()=>{
    it('matches snapshot', ()=>{

        const {asFragment}=render(
        <Item price="2000" />
        );
        expect(asFragment()).toMatchSnapshot();
    });


    it ('button redners correct text from initial state', ()=>{
        render (<Item price="2000" description="Awesome item" name="Test Item"/>);    
        const addBtn=screen.getByRole('button', {name:'Add to cart'});
        expect(addBtn).toHaveTextContent('Add to cart');
        });

    it ('add to cart button redners correct text on click', ()=>{
        render(
            <Item
            price="2000"
           
            add={jest.fn()}
            />
        );
        const addBtn=screen.getByRole('button', {name:'Add to cart'});
        userEvent.click(addBtn);
        expect(addBtn).toHaveTextContent("Success!");
    
});

    it ('quantity increases on increment button click', async()=>{
        render(
            <Item
            price="2000"
           
            add={jest.fn()}
            />
        );
        const incrementBtn=screen.getByRole('button', {name:'+' });
        const quantity=screen.getByTestId('quantity');
        userEvent.click(incrementBtn);
        expect(quantity).toHaveTextContent('2');
    });
    it ('quantity doesnt drop belwo 1', async()=>{
        render(
            <Item
            price="2000"
         
            add={jest.fn()}
            />
        );
        const decrementBtn=screen.getByRole('button', {name:'-' });
        const quantity=screen.getByTestId('quantity');
        userEvent.click(decrementBtn);
        expect(quantity).toHaveTextContent('1');
    });

    it ('decrement btn decr quantity', async()=>{
        render(
            <Item
            price="2000"
            
            add={jest.fn()}
            />
        );
        const incrementBtn=screen.getByRole('button', {name:'+' });
        const decrementBtn=screen.getByRole('button', {name:'-' });
        const quanitty=screen.getByTestId('quantity');
        userEvent.click(incrementBtn);
        userEvent.click(incrementBtn);
        userEvent.click(decrementBtn);
        expect(quantity).toHaveTextContent('2');
    });
});