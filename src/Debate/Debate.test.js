import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Debate from '../Debate/Debate';
    

describe('Debate', () => {

  it('should display all Debate elements on load', () => {
    const { getByLabelText, getByPlaceholderText } = render(<MemoryRouter><Debate /></MemoryRouter>)
    const pageTitle = getByLabelText('debatable')
    expect(pageTitle).toBeInTheDocument()
  })
})