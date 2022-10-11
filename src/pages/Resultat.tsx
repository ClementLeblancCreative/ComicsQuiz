import React,{useEffect,useState}  from "react"
import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { signOut,onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";

const StyledSvg = styled.svg`
  fill: white;
  width: 2rem;
  height: 2rem;`

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: crimson;
  border: none;
  border-radius: 100rem;
  margin: 2rem;
  margin-inline: 5rem;`

const StyledDiv = styled.div`
    height: 65.3vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;`

function Resultat() {
  const Disconnect = async  () =>{ 
    await signOut(auth).then(()=>
        navigate('/')
      )};
      
  let navigate = useNavigate(); 
  useEffect( () => {
    onAuthStateChanged(auth,user=>{
      if(user == null){
        navigate('/');
      }
    }),[];
  }, []);
  const location = useLocation();
  const data = location.state;
    return (
      <React.Fragment>
        <StyledDiv>
          {data}
        </StyledDiv>
        <StyledButton type="button" onClick={Disconnect}> <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/></StyledSvg> </StyledButton>
      </React.Fragment>
    )
  }
  
  export default Resultat