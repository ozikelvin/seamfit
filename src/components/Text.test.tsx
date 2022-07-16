import React from 'react';
import { TextInput } from "./Text";
import { render, screen } from '@testing-library/react';




test('render a text input', () => {
    render(<TextInput  />);
    const TextElememt = screen.getByRole('textbox')
    expect(TextElememt).toHaveAttribute('type');
    expect(TextElememt).toHaveAttribute('value' , "")
    expect(TextElememt).toBeInTheDocument()
  }); 
        