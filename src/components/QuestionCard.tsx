import { useContext } from "react";
import { AppContext } from "../App";
import { actions } from "../actions";
import { Typography, Card, TextField } from "@mui/material";
import RadioOptions from "./RadioOptions";
import CheckboxOptions from "./CheckboxOptions";
//import QuestionHighlighting from "../components/QuestionHighllighting";

type QuestionCardProps = {
  id: number;
  question: string;
  questionType: QuestionType;
  answers: Array<any>;
};

export type QuestionType = "checkbox" | "radio" | "textInput";
//let answer=false;
function QuestionCard({
  id,
  question,
  questionType,
  answers,
}: QuestionCardProps) {
  const { setAnswer } = actions;
  const [appData, dispatchAppData] = useContext(AppContext);
  
  console.log("App data is", appData);
  //const variable =appData.answers[id];
  //if(variable.value!=null)
  //{
    //answer=true;

  //}
  
  return (
      <Card
      sx={{
        padding: "2rem",
        width: "500px",
        marginTop: "2rem",
        overflowY: "auto",
      }}
    >
      <Typography variant="h5" marginBottom="2rem">
        {question}
      </Typography>
      {(() => {
        switch (questionType) {
          case "checkbox":
            return (
              <CheckboxOptions
                handleChange={(e: any) => {
                  let currentArray: any = [];
                  if (Array.isArray(appData.answers[id]?.value)) {
                    currentArray = [...appData.answers[id]?.value];
                  }
                  if (e.target.checked) {
                    currentArray.push(e.target.name);
                  } else {
                    const indexOfName = currentArray.indexOf(e.target.name);
                    currentArray.splice(indexOfName, 1);
                  }
                  dispatchAppData(setAnswer(id, currentArray, questionType));
                }}
                options={answers.map((answer: any) => {
                  return {
                    option: answer.option,
                    value:
                      appData.answers[id]?.value.includes(answer.option) ||
                      false,
                  };
                })}
              />
            );
          case "radio":
            return (
              <RadioOptions
                options={answers.map((answer) => answer.option)}
                value={appData.answers[id]?.value || ""}
                handleChange={(e) =>
                  dispatchAppData(setAnswer(id, e.target.value, questionType))
                }
              />
            );
          case "textInput":
            return (
              <TextField
                value={appData.answers[id]?.value || ""}
                onChange={(e) =>
                  dispatchAppData(setAnswer(id, e.target.value, questionType))
                }
              />
            );
          default:
            return <div>Not found</div>;
        }
      })()}
     
    </Card>
    
  );
}

export default QuestionCard;
