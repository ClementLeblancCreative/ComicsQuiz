import React from "react"
import styled from 'styled-components'
import CptnAmrca from  '../assets/Cptnmrca.webp'

const StyledDiv = styled.div`
    height: 65.3vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;`


const StyledSousDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;`

    
const Styledp = styled.p`
    font-size: 13rem;
    text-shadow: 1px 1px 6px white, 2px 2px 7px blue;
    color: crimson;
    padding-left: 2rem;
    padding-right: 2rem;`

const Styledimg = styled.img`
    height: 10rem;`

function Error404() {

    return (
      <React.Fragment>
        <StyledDiv>
          <StyledSousDiv>
            <Styledp>4</Styledp>
            <Styledimg src={CptnAmrca} alt="wolverine"></Styledimg>
            <Styledp>4</Styledp>
          </StyledSousDiv>
        </StyledDiv>
      </React.Fragment>
    )
  }
  
  export default Error404