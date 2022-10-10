import React from "react"
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios";
import { Loader } from '../components/Loader'
import styled from 'styled-components'
import { signOut,onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

async function test() {
  //'15613344186852d8434870649290a0bfa127f0ab48c9ccd1901ed4ba5e7ec501ae6eaab9b149c96da7f94'
  //await axios.get('https://gateway.marvel.com:443/v1/public/characters/1009609?ts=1561334418685&apikey=4ba5e7ec501ae6eaab9b149c96da7f94&hash=d87a448070dbaec3cc5cbdee862a96a6 ').then((data)=> {
  //console.log(data);

  //})
}

const StyledButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: crimson;
  border: none;
  border-radius: 100rem;`

const StyledDiv = styled.div`
    height: 65.3vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;`

function Quiz() {
//test();
let navigate = useNavigate(); 

const Disconnect = async  () =>{ 
  await signOut(auth).then(()=>
      navigate('/')
    )};


const { string : questionId} = useParams()
const questionNumberInt = questionId
    onAuthStateChanged(auth,user=>{
      if(user == null){
        navigate('/');
      }
      })
    return (
      <React.Fragment>
        <StyledDiv>
        <StyledButton type="button" onClick={Disconnect}> </StyledButton>
        <Loader />
          Question
          placeholder
          placeholder
          placeholder
          placeholder
          placeholder
          Suivant
          Precedent
        </StyledDiv>
      </React.Fragment>
    )
  }
  
  export default Quiz