import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './form';

test('submits form with data', () => {
  render(<Form />);
  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const ageInput = screen.getByLabelText('Age:');
  const submitButton = screen.getByText('Submit');

  // Simulate user input
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(ageInput, { target: { value: '30' } });

  // Spy on console.log
  const consoleSpy = jest.spyOn(console, 'log');

  // Submit the form
  fireEvent.click(submitButton);

  // Assertions
  expect(nameInput).toHaveValue('John Doe');
  expect(emailInput).toHaveValue('john@example.com');
  expect(ageInput).toHaveValue(30);


  // Check if console.log was called with the expected data
  expect(consoleSpy).toHaveBeenCalledWith('Form submitted with data:', {
    name: 'John Doe',
    email: 'john@example.com',
    age: '30',
  });

  // Restore the original console.log
  consoleSpy.mockRestore();
});
