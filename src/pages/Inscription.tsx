import React from "react"
import { Link,useNavigate   } from "react-router-dom"
import styled from 'styled-components'
import Irnman from '../assets/irnman.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    margin-top: 4rem;
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

function Inscription() {
  let navigate = useNavigate();
  
  const inscit = async (event : any) =>{
    event.preventDefault(); 
    console.log(mail + motdepasse);
    await createUserWithEmailAndPassword(auth,mail,motdepasse).then(()=>{
      navigate('/quiz/0')
    }
    ).catch(e=>
      toast('Verifier vos champs (le mdp doit contenir au moins 6 charactere)'))
    return false};

  return (
    <React.Fragment>
      <StyledDiv>
        <ToastContainer />
        <img src={Irnman} alt="wolverine"></img>
        <StyledSousDiv>
          <h3>INSCRIPTION</h3>
          <form onSubmit={inscit}>
            <StyledIput type="text" placeholder="Pseudo" autoComplete="off" required></StyledIput>
            <StyledIput type="text" placeholder="Email"  value={mail} onChange={handleChangemail} autoComplete="off" required></StyledIput>
            <StyledIput type="password" placeholder="Mot de Passe"  value={motdepasse} onChange={handleChangemdp} autoComplete="offf" required></StyledIput>
            <StyledButton type="submit">Inscription</StyledButton>
          </form>
          <StyledHr/>
          <StyledLink to='/connexion'>D??j?? Inscrit ? Connectez-vous! </StyledLink>
        </StyledSousDiv>
      </StyledDiv>
    </React.Fragment>
  )
}

export default Inscription