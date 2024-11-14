

import { useState } from "react";
import { useFetch } from "./hooks/use-fetch";
import { Options } from "./Options";
import { Question } from "./Question";
import { NextButton} from "./NextButton"
export function Layout(){
  const [totalCorrect , setTotalCorrect]=useState(0);
    const [count , setCount]=useState(1)
    let url = "http://localhost:3000/"+count
    const data= useFetch(url)
  return <div style={{width:"50%"}}>
    {count <= 10 ? <Question count={count} data={data.question}></Question> : null }
    {count <= 10 ?  <Options  data={data}  setTotalCorrect={setTotalCorrect} setCount={setCount}></Options> : null }
    {count <= 10 ? <NextButton setCount={setCount}></NextButton> : null}
    {count > 10 ? <h1>Total correct : {totalCorrect}</h1> : null}

    
  </div>
  
}