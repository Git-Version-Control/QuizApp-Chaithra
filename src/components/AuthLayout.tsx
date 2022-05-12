import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AppContext } from "../App";
import questions from "../questions.json";

const TOTAL_QUESTIONS = questions.length;
let  areQuestionsNotAnswered:boolean;
const AuthLayout = () => {
  const [appData] = useContext(AppContext);
  let count = Object.keys(appData.answers).length;

  //console.log(Object.keys(appData.answers));

  count==TOTAL_QUESTIONS?areQuestionsNotAnswered = false:areQuestionsNotAnswered = true;
  /*if(count==TOTAL_QUESTIONS){
    //console.log('set true');
    areQuestionsNotAnswered = false;
  }
  else{
    console.log('set false');
    areQuestionsNotAnswered = true;
  }*/
  
  return areQuestionsNotAnswered ? (
    <Navigate to="/questions" replace />
  ) : (
    <Outlet />
  );
};

export default AuthLayout;
