import {renderHook} from '@testing-library/react-hooks';
import useTopics from './useTopics';

describe('the useTopics hook', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        topic: [
          {
            category:
            "Science & Nature",
            type:
            "multiple",
            difficulty:
            "easy",
            question:
            "What is the standard SI unit for temperature?",
            correct_answer:
            "Kelvin",
            incorrect_answers:
            ["Fahrenheit", "Celsius", "Rankine"]
          }
        ]
      })
    }))
    jest.setTimeout(30000)
  })

  it('should make the api call to fetch the default value and set it in the state', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useTopics());
      await waitForNextUpdate();
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result.current.Topics.length).toEqual(0)
  })
});