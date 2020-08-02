import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Names from '../Names/Names';
import { createMemoryHistory } from 'history';
    

describe('Names', () => {

  it('should display all Names elements on load', () => {
    const { getByLabelText, getByRole } = render(<MemoryRouter><Names /></MemoryRouter>)
    const player1input = getByLabelText('player-one')
    const player2input = getByLabelText('player-two')
    const player3input = getByLabelText('player-three')
    const player4input = getByLabelText('player-four')
    const player5input = getByLabelText('player-five')
    const button = getByRole('link')
    expect(player1input).toBeInTheDocument()
    expect(player2input).toBeInTheDocument()
    expect(player3input).toBeInTheDocument()
    expect(player4input).toBeInTheDocument()
    expect(player5input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should display all Names elements on load', () => {
    const { getByLabelText, getByRole } = render(<MemoryRouter><Names /></MemoryRouter>)
    const player1input = getByLabelText('player-one')
    expect(player1input).toBeInTheDocument()
    fireEvent.change(player1input, { target: { value: '23' } })
    expect(player1input.value).toEqual('23')
  })

  it('should call setPlayers when the submit button is clicked', () => {
    const setPlayers = jest.fn()
    const { getByRole } = render(<MemoryRouter><Names setPlayers={setPlayers}/></MemoryRouter>)
    const submitButton = getByRole('link', { name: 'Submit'})
    expect(submitButton).toBeInTheDocument()
    fireEvent.click(submitButton)
    expect(setPlayers).toHaveBeenCalledTimes(1)
  })


  it('should call setPlayers with the players names submitted', () => {
    const setPlayers = jest.fn()
    const { getByRole, getByLabelText } = render(<MemoryRouter><Names setPlayers={setPlayers}/></MemoryRouter>)
    const submitButton = getByRole('link', { name: 'Submit'})
    expect(submitButton).toBeInTheDocument()
    const player1input = getByLabelText('player-one')
    const player2input = getByLabelText('player-two')
    const player3input = getByLabelText('player-three')
    const player4input = getByLabelText('player-four')
    const player5input = getByLabelText('player-five')
    fireEvent.change(player1input, { target: { value: 'Donatello' } })
    fireEvent.change(player2input, { target: { value: 'Raphael' } })
    fireEvent.change(player3input, { target: { value: 'Michelangelo' } })
    fireEvent.change(player4input, { target: { value: 'Leonardo' } })
    fireEvent.change(player5input, { target: { value: 'April O`Neil' } })
    fireEvent.click(submitButton)
    expect(setPlayers).toHaveBeenCalledWith([{"id": 1, "name": "Donatello"}, {"id": 2, "name": "Raphael"}, {"id": 3, "name": "Michealangelo"}, {"id": 4, "name": "Leonardo"}, {"id": 5, "name": "April O`Neil"}])
  })
})