import Card from './card/Card'
import './game.css'

function Game({ updateScores } : { updateScores : (isCorrect: boolean) => void }) {
    return ( 
      <div className='game'>
        <Card characterName='1' updateScores={updateScores}/>
        <Card characterName='2' updateScores={updateScores}/>
        <Card characterName='3' updateScores={updateScores}/>
        <Card characterName='4' updateScores={updateScores}/>
        <Card characterName='5' updateScores={updateScores}/>
        <Card characterName='6' updateScores={updateScores}/>
        <Card characterName='7' updateScores={updateScores}/>
        <Card characterName='8' updateScores={updateScores}/>
        <Card characterName='9' updateScores={updateScores}/>
        <Card characterName='10' updateScores={updateScores}/>
        <Card characterName='11' updateScores={updateScores}/>
        <Card characterName='12' updateScores={updateScores}/>
      </div>
    )
  }
  
export default Game