import React from "react"
import { Link,useNavigate   } from "react-router-dom"
import styled from 'styled-components'
import Irnman from '../assets/irnman.png'

const StyledDiv = styled.div`
    height: 65.3vh;
    display: flex;
    justify-content: space-evenly;`

const StyledSousDiv = styled.div`
    width:45rem;
    align-items: flex-start;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;`

const StyledHr = styled.hr`
    width: 100%;
    border: dashed 1px;`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;`

const StyledIput = styled.input`
  width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    color: white;
    border-bottom: solid 1px white;`

const StyledButton = styled.button`
    align-self: center;
    padding: 1rem;
    padding-inline: 3rem;
    border: none;
    background-color: crimson;
    color: white;`


  
function Connexion() {
  let navigate = useNavigate(); 
  const Connect = () =>{ 
    navigate('/quiz');
  }

  return (
    <React.Fragment>
      <StyledDiv>
        <img src={Irnman} alt="wolverine"></img>
        <StyledSousDiv>
          <h3>CONNEXION</h3>
          <StyledIput type="text" placeholder="Pseudo ou Email"></StyledIput>
          <StyledIput type="password" placeholder="Mot de Passe"></StyledIput>
          <StyledButton type="button"onClick={Connect}>Connexion</StyledButton>
          <StyledHr/>
          <StyledLink to='/inscription'>Pas de compte ? Incrivez-vous ! </StyledLink>
        </StyledSousDiv>
      </StyledDiv>
    </React.Fragment>
  )
}

export default Connexion