import React from 'react';
import { Details } from './detail';
import { render, screen } from '@testing-library/react';


test('render a div' , () =>{
    render(<Details />);
    const DivElement = screen.getByRole('contentinfo');
    const H1  = screen.getByRole('heading');
    const IMG = screen.getByRole('img');
    expect(DivElement).toContainElement(H1);
    expect(DivElement).toContainElement(IMG);
    expect(IMG).toHaveAttribute('alt');
    
})