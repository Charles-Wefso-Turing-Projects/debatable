import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Debate from '../Debate/Debate';
const judges = [{name:"Leonardo"},{name:"Raphael"},{name:"Michelangelo"}]
const debators = [{name:"Donnie"},{name:"Splinter"}]
const topic1 = {correct_answer: "Pizza"}
const topic2 = {correct_answer: "Skateboarding"}
const setTopic1 = jest.fn().mockReturnValue(topic1.correct_answer)
const setTopic2 = jest.fn().mockReturnValue(topic2.correct_answer)

describe('Debate', () => {

  it('should display all Debate elements on load', () => {
    const { getByText } = render(<MemoryRouter><Debate setTopic1={setTopic1} setTopic2={setTopic2} judges={judges} debators={debators}/></MemoryRouter>)
    const debator1 = getByText('Player One: Donnie')
    const debator2 = getByText('Player Two: Splinter')
    const judge1 = getByText('Leonardo')
    const judge2 = getByText('Raphael')
    const judge3 = getByText('Michelangelo')
    expect(debator1).toBeInTheDocument()
    expect(debator2).toBeInTheDocument()
    expect(judge1).toBeInTheDocument()
    expect(judge2).toBeInTheDocument()
    expect(judge3).toBeInTheDocument()
  })

  it('should set topics on load', () => {
    const { getByText } = render(<MemoryRouter><Debate setTopic1={setTopic1} setTopic2={setTopic2} judges={judges} debators={debators}/></MemoryRouter>)
    expect(setTopic1).toHaveBeenCalled();
    expect(setTopic2).toHaveBeenCalled();
  })
})
