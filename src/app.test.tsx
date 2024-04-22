import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import App from './App'

const fakeEmployees = [
  {
    name: "Madame de Pompadour",
    id: 1}
]

describe('App', () => {
  it('renders the App component', () => {
    render(<App employees={fakeEmployees} />);
    const element = screen.getByRole('heading')
    expect(element).toBeInTheDocument();
    screen.debug(element)
  })
})

