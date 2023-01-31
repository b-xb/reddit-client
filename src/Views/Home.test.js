import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page view', () => {
  render(<Home />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});