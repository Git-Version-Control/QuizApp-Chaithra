import { useLocation, useNavigate } from "react-router-dom";
import questionsFile from "../questions.json";

import React, { useContext,useEffect } from "react";
import { AppContext } from "../App";

const totalQuestions = questionsFile.length;
let  user_answer:any;


const ResultsPage = () => {
  const [appData] = useContext(AppContext);
  
  let correct_answer:any;

  //console.log(appData.answers);
  questionsFile.map((question) => {
    let variable=question.answerOptions
    if(variable[question.id - 1].isCorrect==true)
    {
      correct_answer=variable[question.id - 1].option;
      //console.log(correct_answer);
      Object.entries(appData.answers).map((answer:any)=>{
        let user=answer[question.id - 1].value;
        //console.log(appData.answer.length);
        //if(user===)
      })
      let count = Object.keys(appData.answers).length;
      console.log(count);
      
    }
    if(correct_answer==appData.answers[question.id - 1]){
      
    }
  })
  return(
    <div>
    Results:
    {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
      <p key={currentIndex}>{answer.value}</p>
    ))}
  </div>
    
  );
    
};

export default ResultsPage;