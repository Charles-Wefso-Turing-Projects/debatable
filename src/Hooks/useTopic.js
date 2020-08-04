import { useState, useEffect } from "react";

const useTopic = (category) => {
  const [topic, setTopic] = useState("");

  // useEffect

  useEffect(() => {
    const triviaFetch = () => {
      fetch(
        `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy&type=multiple`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Reframe your argument.");
          }
        })
        .then((result) => setTopic(result.results[0].correct_answer))
        .catch((err) => console.log(err.message));
    };

    triviaFetch();
  });

  return topic;
};

export default useTopic;
