import { useState, useEffect } from 'react'

const useTopic = (category) => {
  const [topic, setTopic] = useState({})

  // useEffect

  useEffect(() => {
    const triviaFetch = () => {
      fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy&type=multiple`)
        .then((res) => res.json())
        .then((result) => console.log(result))
        .then((result) => setTopic(result.results[0]))
        .catch((err) => console.log(err.message))
    }

    triviaFetch()
  }, [])

  return topic
}

export default useTopic
