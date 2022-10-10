import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Wolverine from '../assets/wolverin.png'

const StyledDiv = styled.div`
    height: 65.3vh;
    display: flex;
    align-items: end;
    justify-content: center;`

const Styledlink = styled(Link)`
    align-self: baseline;
    margin-inline: 3rem;
    margin-top: 7rem;
    border: solid 1px white;
    padding: 1rem;
    text-decoration: none;
    color: white;`

function Welcome() {

    return (
      <React.Fragment>
        <StyledDiv>
          <Styledlink to='/connexion'>Connexion</Styledlink>
          <img src={Wolverine} alt="wolverine"></img>
          <Styledlink to='/inscription'>Inscription</Styledlink>
        </StyledDiv>
      </React.Fragment>
    )
  }
  
  export default Welcome