import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form header', () => {
  render(<App />);
  const headerElement = screen.getByText('Form with Details');
  expect(headerElement).toBeInTheDocument();
});


