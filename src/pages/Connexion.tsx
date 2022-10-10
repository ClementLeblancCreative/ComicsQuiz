import React from "react"
import { Link,useNavigate   } from "react-router-dom"
import styled from 'styled-components'
import Irnman from '../assets/irnman.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase"
import { ToastContainer, toast } from 'react-toastify';

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
    color: white;
    cursor:pointer`


    function handleChangemdp(event : any) {
      motdepasse =  event.target.value;
    }
    
    function handleChangemail(event : any) {
      mail =  event.target.value;
    }
    
    var mail :string;
    var motdepasse: string;

function Connexion() {
  let navigate = useNavigate(); 
  const Connect = () =>{ 
    signInWithEmailAndPassword(auth,mail,motdepasse).then(()=>
      navigate('/quiz/0')).catch(e=>
        toast('Verifier vos champ'))};

  return (
    <React.Fragment>
      <ToastContainer/>
      <StyledDiv>
        <img src={Irnman} alt="wolverine"></img>
        <StyledSousDiv>
          <h3>CONNEXION</h3>
          <form>
            <StyledIput type="text" placeholder="Email" value={mail} onChange={handleChangemail} required></StyledIput>
            <StyledIput type="password" placeholder="Mot de Passe" required value={motdepasse} onChange={handleChangemdp}></StyledIput>
            <StyledButton type="button"onClick={Connect}>Connexion</StyledButton>
          </form>
          <StyledHr/>
          <StyledLink to='/inscription'>Pas de compte ? Incrivez-vous ! </StyledLink>
        </StyledSousDiv>
      </StyledDiv>
    </React.Fragment>
  )
}

export default Connexion