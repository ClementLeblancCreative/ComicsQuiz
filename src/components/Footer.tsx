import React from "react"
import styled from 'styled-components'
    
const StyledDiv = styled.div`
    background-color: #222222;
    height: 9rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: center;`

function Footer() {

    return (
    <React.Fragment>
        <StyledDiv>
            <p>lorem lorem lorem lorem</p>
            <p>lorem lorem lorem lorem</p>
        </StyledDiv>
    </React.Fragment>
    )
}
  
  export default Footer