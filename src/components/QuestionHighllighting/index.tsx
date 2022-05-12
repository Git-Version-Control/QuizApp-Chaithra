import Box from "@mui/material/Box";
import questions from "../../questions.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Circle:any=({id,answered=false}:any)=>{
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  return(
    <Box
      component="span"
      sx={{
        bgcolor:'gray',
        //bgcolor: answered ? "green" : "gray",
        borderRadius: "50%",
        display: "flex",
        color: "white",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "2px 2px 10px 1px gray;",
      }}
    > 
      
      {id}
    </Box>
   
  )  
}

const QuestionHighlighting = ({ answered, current }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        top: "80px",
        right: 0,
        left: 0,
        justifyContent: "space-around",
        position: "absolute",
        backgroundColor:"yellow"

      }}
    >
    

      {questions.map((question) => {
        return (
          <Circle
            key={question.id}
            id={question.id}
            //answered={answered}
          />
        );
      })}
    </Box>
  );
};

export default QuestionHighlighting;