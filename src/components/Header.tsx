import React from "react"
import styled from 'styled-components'

  const StyledDiv = styled.div`
  background-color: #222222;
  font-size: 3rem;
  height: 12rem;
  justify-content: center;
  align-items: center;
  display: flex;`

function Header() {

  return (
    <React.Fragment>
      <StyledDiv>
        <h1>COMIC QUIZ</h1>
      </StyledDiv>
    </React.Fragment>
  )
}

export default Header
