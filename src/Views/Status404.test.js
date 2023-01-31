import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Status404 from './Status404';

test('renders 404 page', () => {
  render(<BrowserRouter><Status404 /></BrowserRouter>);
  expect(screen.getByText(/Sorry, the page you are looking for has not been found/i)).toBeInTheDocument();
});