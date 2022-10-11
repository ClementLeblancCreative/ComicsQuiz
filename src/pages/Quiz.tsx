import React,{useEffect,useState}  from "react"
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from "axios";
import { Loader } from '../components/Loader'
import styled from 'styled-components'
import { signOut,onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { ComicsQuiz } from '../assets/comicsQuiz'
import { toast, ToastContainer } from "react-toastify";

const StyledSvg = styled.svg`
  fill: white;
  width: 2rem;
  height: 2rem;
`

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: crimson;
  border: none;
  border-radius: 100rem;
  margin: 2rem;
  margin-inline: 5rem;`

const StyledSousDiv = styled.div`
  height:100%;
  justify-content: space-evenly;
  align-items: center;
  margin-right: auto;    
  width: 45rem;
  display: flex;
  flex-direction: column;`

const StyledDiv = styled.div`
    height: 65.3vh;
    display: flex;
    flex-direction: row;
    justify-content: center;`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-inline: 3rem;`

const StyledButtonChoix = styled.button`
    color: white;
    background-color: transparent;
    border: transparent;
    cursor:pointer`


function Quiz() {
    
  const [isDataLoading, setDataLoading] = useState(true)
  const [imgSource, setingSource] = useState("")
  let navigate = useNavigate(); 

  const Disconnect = async  () =>{ 
    await signOut(auth).then(()=>
        navigate('/')
      )};


  const { questionNumber } : any = useParams()
  const questionNumberInt = parseInt(questionNumber)
    const quiz = ComicsQuiz[0].quiz.debutant[questionNumberInt];
    useEffect( () => {
      onAuthStateChanged(auth,user=>{
        if(user == null){
          navigate('/');
        }
        })
      async function fetchImage(){
      //'15613344186852d8434870649290a0bfa127f0ab48c9ccd1901ed4ba5e7ec501ae6eaab9b149c96da7f94'
      await axios.get('https://gateway.marvel.com:443/v1/public/characters/'+quiz.heroId+'?ts=1561334418685&apikey=4ba5e7ec501ae6eaab9b149c96da7f94&hash=d87a448070dbaec3cc5cbdee862a96a6 ')
      .then((data)=> {
        setingSource(data.data.data.results[0].thumbnail.path + '/standard_fantastic.' + data.data.data.results[0].thumbnail.extension)
      }).catch((e)=>
        console.log(e)
      )
      .finally(()=>{
        setDataLoading(false);})
      }
      fetchImage()
    }, [])

  return (
    <StyledDiv>
      <ToastContainer/>
      {isDataLoading? <Loader /> : <img src={imgSource}/>}
      <StyledSousDiv>
        <h1>Question {questionNumberInt}</h1>
        {quiz.question}
        {quiz.options.map((opt)=> <StyledButtonChoix type="button" onClick={()=>{((opt==quiz.answer)?toast('CORRECT 🎉🎉'):toast('RATÉ 😭😭')); questionNumberInt + 1>9 ?navigate(`/results`):navigate(`/quiz/${questionNumberInt + 1}`)}}>{opt}</StyledButtonChoix>)}
        <div>
          {!(questionNumberInt - 1 <0 )&& <StyledLink to={`/quiz/${questionNumberInt - 1}`}>&lt;&nbsp;  Précédent</StyledLink>}
          {questionNumberInt + 1<10 ? (
            <StyledLink to={`/quiz/${questionNumberInt + 1}`}>Suivant  &nbsp;&gt;</StyledLink>
          ) : (
            <StyledLink to="/results" state={imgSource}>Résultats &nbsp;&gt;</StyledLink>
          )}
        </div>
      </StyledSousDiv>
      <StyledButton type="button" onClick={Disconnect}> <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/></StyledSvg> </StyledButton>
    </StyledDiv>
  )
}
  
  export default Quiz