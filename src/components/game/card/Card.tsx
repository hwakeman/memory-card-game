import { useEffect, useState } from 'react';
import './card.css'

function Card({ characterName, updateScores } : { characterName : string, updateScores : (isCorrect: boolean) => void }) {
  const [sprite, setSprite] = useState<string>("")
  useEffect(() => {
    getImage().then()
  }, [characterName])

  return ( 
    <div className='card'> 
      <img src={sprite}></img>
    </div>
  )

  async function getImage() : Promise<string> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${characterName}`)
    const data = await response.json();
    const sprite = data.sprites.front_shiny
    return sprite
  }
}
  
export default Card