import styled from "styled-components";


const Rolldice = ({currentDice, rollDice}) => {

   

  return (
    <DiceContainer>
      <div className='dice' onClick={()=>rollDice()} >
        <img src={`/dice/dice_${currentDice}.png`} alt="dice 1" />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  )
}

export default Rolldice

const DiceContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    p{
        text-align: center;
    }
    .dice{
        cursor: pointer;
    }
`
