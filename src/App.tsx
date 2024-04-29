import './App.css'
import Header from './components/header/Header'
import Counter from './components/counter/Counter'
import Game from './components/game/Game'
import { useState } from 'react'

function App() {
  const [currentScore, setCurrentScore] = useState<number>(0)
  const [highScore, setHighScore] = useState<number>(0)

  return ( 
    <>
      <div className="app-container">
        <Header/>
        <Counter currentScore={currentScore} highScore={highScore} />
        <Game updateScores={updateScores}/>
      </div>
    </>
  )

  function updateScores(isCorrect: boolean) {
    let tempCurrentScore = currentScore
    let tempHighScore = highScore;
    if(isCorrect) {
        tempCurrentScore = (currentScore + 1)
        if(currentScore > highScore) tempHighScore = tempCurrentScore
        if(currentScore == 12) tempCurrentScore = 0
        setCurrentScore(tempCurrentScore)
        setHighScore(tempHighScore)
    } else {
        tempCurrentScore = 0
        setCurrentScore(tempCurrentScore)
    }
  }
}

export default App
