import { useState, useEffect } from 'react'

const usePlayer = (name) => {
  const [playerName, setPlayerName] = useState(name)


  useEffect(() => {
    setPlayerName(name)
  }, [name])

  return(
   {"name" : name }
  ) 
}

export default usePlayer
