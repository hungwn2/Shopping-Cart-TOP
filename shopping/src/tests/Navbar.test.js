import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('NavBar tests', () => {
    it ('renders Navbar component', ()=>{
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        expect(screen.getByText('Midnight Sun').toBeInTheDocument());
    });
    it ('renders snapshot', ()=>{
        const {asFragment}=render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders correct links', ()=>{
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Cart/i)).toBeInTheDocument();
    });
    it ('NavLinks work', ()=>{
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );
        const homeLink=screen.getByText(/Home/i);
        userEvent.click(homeLink);
        expect(window.location.pathname('/'));
    });


    it('home link has correct class', () => {
        render(
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        );
        expect(screen.getByText('Midnight Sun')).toHaveClass('active');
      });

    it('router applies active styling to clicked buttons', ()=>{
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );
        const aboutLink=screen.getByRole('link', {name:'About'});
        userEvent.click(aboutLink);
        expect(aboutLink).toHaveClass('active');
});
      




});