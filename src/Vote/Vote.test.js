import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Vote from '../Vote/Vote';
import { createMemoryHistory } from 'history';

const judges = [{name:"Leonardo"},{name:"Raphael"},{name:"Michelangelo"}]
const topic1 = {correct_answer: "Pizza"}
const topic2 = {correct_answer: "Skateboarding"}


describe('Vote', () => {

  it('should display all Vote elements on load', () => {
    const { getByText, getByRole, getAllByRole } = render(<MemoryRouter><Vote judges={judges} 
                                                                     topic1={topic1} 
                                                                     topic2={topic2}
                                                                     />
                                                 </MemoryRouter>)
    const vote1 = getByText('Judge Leonardo Votes')
    const voteButtonTeam1 = getAllByRole('button', { name: 'Team: Pizza' })
    const voteButtonTeam2 = getAllByRole('button', { name: 'Team: Skateboarding' })
    const vote2 = getByText('Judge Raphael Votes')
    const vote3 = getByText('Judge Michelangelo Votes')
    const winnerButton = getByRole('link')
    expect(vote1).toBeInTheDocument()
    expect(vote2).toBeInTheDocument()
    expect(vote3).toBeInTheDocument()
    expect(voteButtonTeam1).toHaveLength(3)
    expect(voteButtonTeam2).toHaveLength(3)
    expect(winnerButton).toBeInTheDocument()
  })

})