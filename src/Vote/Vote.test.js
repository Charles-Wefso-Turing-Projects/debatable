import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Vote from '../Vote/Vote';
    

describe('Vote', () => {

  it('should display all Vote elements on load', () => {
    const { getByLabelText, getByPlaceholderText } = render(<MemoryRouter><Vote /></MemoryRouter>)
    const pageTitle = getByLabelText('debatable')
    expect(pageTitle).toBeInTheDocument()
  })
})