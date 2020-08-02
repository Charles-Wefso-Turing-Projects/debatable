import { renderHook } from '@testing-library/react-hooks'
import useTopics from './useTopics'
// import TestRenderer from 'react-test-renderer';

describe('the useTopics hook', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        topics: [
          {
            category: "Science & Nature",
            type: "multiple",
            difficulty: "easy",
            question: "What is the standard SI unit for temperature?",
            correct_answer: "Kelvin",
            incorrect_answers: ["Fahrenheit", "Celsius", "Rankine"]
          }
        ]
      })
    }))
    jest.setTimeout(30000)
  })

  afterEach(() => {
    global.fetch.mockClear()
  })

  afterAll(() => {
    global.fetch.mockRestore()
  })

  it('should make the api call to fetch the default value and set it in the state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTopics())
    await waitForNextUpdate()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(result.current.topics.length).toEqual(1)
  })
})
