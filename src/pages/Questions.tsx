import { useEffect, useState } from "react";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import questions from "../questions.json";

import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import QuestionHighlighting from "../components/QuestionHighllighting";
import { AppContext } from "../App";
import { useContext } from "react";
const TOTAL_QUESTIONS = questions.length;
let answer:boolean=true;
const Questions = () => {
  console.log(questions[1].id);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  const [isLoading, setIsLoading] = useState(true);
  //const [answered, setAnswered] = useState<any>([]);
  const [appData] = useContext(AppContext);
  const navigate=useNavigate();
  //const { question } = questions;
 
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  

  function handleNextButtonClick(index: number) {
    if (index === TOTAL_QUESTIONS - 1) {
      navigate("/results");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }
 
  
  return (
    <Box 
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    > 
      {isLoading ? (
        <CircularProgress />
      ) : (
        questions.map(
          (question, index) =>
            currentQuestion === question.id && (
              <>
               {/*(appData.answers[question.id-1].value!==undefined)?answer=true:answer=false*/}
               
              <Box key={question.id}>      
                <Typography variant="h3">Question: {index + 1}</Typography>
                {/*<Box
                  height="500px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"</>
                >*/}
                  <QuestionCard
                    id={question.id}
                    question={question.question}
                    questionType={question.questionType as QuestionType}
                    answers={question.answerOptions}
                  />
                  
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      disabled={index === 0}
                      onClick={() => setCurrentQuestion((prev) => prev - 1)}
                    >
                      Previous
                    </Button>

                    <Button onClick={() => handleNextButtonClick(index)}>
                      {index === TOTAL_QUESTIONS - 1 ? "Submit" : "Next"}
                    </Button>
                    
                    <QuestionHighlighting  answered={answer} current={question.id} />
                  
                  </Box>
                {/*</Box>*/}
              </Box>
              </>
            )      
        )
      )}      
    </Box>
  );
};

export default Questions;
