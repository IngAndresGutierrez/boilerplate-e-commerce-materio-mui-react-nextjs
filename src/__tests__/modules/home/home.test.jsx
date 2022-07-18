/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import Home from '../../../modules/home/pages/Home'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('img', {
      name: /Apple iPhone 11 Pro/i
    })

    expect(heading).toBeInTheDocument()
  })
})
