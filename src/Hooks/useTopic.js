import { useState, useEffect } from "react";

const useTopic = (category) => {
  const [topic, setTopic] = useState({});

  // useEffect

  useEffect(() => {
    const triviaFetch = () => {
      fetch("http://localhost:8000/api/v1/topic")
      .then((res) => res.json())
      .then((result) => setTopic(result.topic))
      .catch((err) => console.log(err.message));
  }

    triviaFetch();
  }, []);

  return topic;
};

export default useTopic;