import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page view', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

test('a bad route will display the 404 page', () => {
  const badRoute = '/some/bad/route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  );

  // verify navigation to "no match" route
  expect(screen.getByText(/Sorry, the page you are looking for has not been found/i)).toBeInTheDocument();

  // clicking on the link takes you back to the home page
  userEvent.click(screen.getByText(/Return to Home Page/i));
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
})

test('a different bad route will also display the 404 page', () => {
  const badRoute = '/also-a-bad-route'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  );

  // verify navigation to "no match" route
  expect(screen.getByText(/Sorry, the page you are looking for has not been found/i)).toBeInTheDocument();

  // clicking on the link takes you back to the home page
  userEvent.click(screen.getByText(/Return to Home Page/i));
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
})

test('The base URL should route to the Home Page ', () => {
  const route = '/';

  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );

  // verify location display is rendered
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
})