import './counter.css'

function Counter({ currentScore, highScore } : { currentScore : number, highScore: number } ) {
    return ( 
        <div className='counter'> 
          <div className='current-score'>Correct Guesses: {currentScore}</div>
          <div className='high-score'> High Score: {highScore}</div>
        </div>
    )
}
  
export default Counter