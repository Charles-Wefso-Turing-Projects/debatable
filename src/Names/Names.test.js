import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Names from '../Names/Names';
    

describe('Names', () => {

  it('should display all Names elements on load', () => {
    const { getByLabelText, getByPlaceholderText } = render(<MemoryRouter><Names /></MemoryRouter>)
    const pageTitle = getByLabelText('debatable')
    expect(pageTitle).toBeInTheDocument()
  })
})