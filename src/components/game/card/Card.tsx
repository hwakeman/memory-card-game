import './card.css'

function Card( {characterName} : {characterName : string} ) {
    return ( 
        <div className='card'> {characterName} </div>
    )
  }
  
export default Card