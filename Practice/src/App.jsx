
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[inputValue,setInputValue]=useState({
    name:"",
    email:"",
    number:"",
  });

  const [nameError,setNameError]=useState("")
  const [emailError,setemailError]=useState("")
  const [numberError,setNumberError]=useState("")


  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleInput=(e)=>{
    
    const {name,value}=e.target;
    setInputValue({
      ...inputValue,
      [name]:value
    });
    setNameError("")
    setemailError('')
    setNumberError('')

  }


  const handleSubmit=(e)=>{
  e.preventDefault();
  Validation()

  if(!nameError && !emailError && !numberError){
    console.log("done");
  }

 }

 const Validation=()=>{

  if (inputValue.name===""){
    setNameError("enter name please")
  }
  if (!emailRegex.test(inputValue.email)){
    setemailError("enter a valid email please")
  }
  if (inputValue.number.length!==10){
    setNumberError("enter a valid phone number please")
  }

}


  return (
    <>
     <section>
      <form  onSubmit={handleSubmit} style={{display:'flex', flexFlow:'column', width:'30%',justifySelf: 'center', marginTop:'10%', justifyContent:'space-between',rowGap:'10px'} }>
        <input type='text'  onChange={(e)=>{handleInput(e)}}name='name' placeholder='enter your name'/>
        <span> {nameError}</span>
        <input type='text' onChange={(e)=>{handleInput(e)}} name='email' placeholder='enter your email'/>
        <span> {emailError}</span>
        <input type='text' onChange={(e)=>{handleInput(e)}} name='number' placeholder='enter your phone number'/>
        <span> {numberError}</span>

        <button type='submit'>Submit</button>
      </form> 
     </section>
    </>
  )
}

export default App
