import React from 'react'
import  styled  from 'styled-components'
const Startgame = ({toggle}) => {
  return (
    <Container>
    <div>
      <img src="dices.png" alt="" />
    </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Startgame


const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content{
  h1{
    font-size: 96px;
    white-space: nowrap;
  }
}
`
const Button = styled.button`
padding: 10px 18px;
border-radius: 5px 5px 5px 5px;
background-color: black;
color: white;
min-width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
float: right;

&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s background ease-in;
}


`
