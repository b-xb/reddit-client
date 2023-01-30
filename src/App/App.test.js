import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('a bad route will display the 404 page', () => {
  const badRoute = '/some/bad/route'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/Sorry, the page you are looking for has not been found/i)).toBeInTheDocument()
})

test('a different bad route will also display the 404 page', () => {
  const badRoute = '/also-a-bad-route'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/Sorry, the page you are looking for has not been found/i)).toBeInTheDocument()
})

test('The base URL should route to the Home Page ', () => {
  const route = '/'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )

  // verify location display is rendered
  expect(screen.getByText(/Home/i)).toBeInTheDocument()
})