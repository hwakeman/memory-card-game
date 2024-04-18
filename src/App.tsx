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
        <Counter currentScore={currentScore} highScore={highScore}/>
        <Game/>
      </div>
    </>
  )
}

export default App
