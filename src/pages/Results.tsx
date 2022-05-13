import questions from "../questions.json";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { AppContext } from "../App";
import PieChart from "../components/PieChart"

const totalQuestions = questions.length;
let user_answer: any;

const Results = () => {
  const [appData] = useContext(AppContext);
  let correct_answer: any;

  //console.log(appData.answers);
  const users = Object.entries(appData.answers).map((answer: any) => {
    return answer;
  }, 0);

  const correctAnswer = questions.reduce((prev, question) => {
    let variable = question.answerOptions;
    if (variable[question.id - 1].isCorrect == true) {
      correct_answer = variable[question.id - 1].option;
    }
    /*console.log(appData.answers[question.id-1].value);
    console.log(appData.answer.length);
    
    let count = Object.keys(appData.answers).length;
    console.log(count);
    //console.log(users[question.id-1]);*/

    return JSON.stringify(users[question.id - 1].value) === JSON.stringify(correct_answer) ? prev + 1 : prev;
  }, 0);
  //console.log(prev);

  return (
    <Box>
      <h1>Result:</h1>
      <Box
        px={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>
          {correctAnswer}/{totalQuestions} is right
        </h1>
        {/*<PieChart
       data={[
       { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;*/}
        <PieChart
          val1={Number(correctAnswer)}
          val2={Number(totalQuestions - correctAnswer)} />

      </Box>
      {questions.map((question) => {
        return (
          <>
            {
              <Box
                sx={{
                  backgroundColor: JSON.stringify(users[question.id - 1].value) === JSON.stringify(user_answer)
                    ? "#green"
                    : "#red",
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid "
                }}
              >
                {JSON.stringify(users[question.id - 1].value)}
              </Box>
            }
            {JSON.stringify(users[question.id - 1].value) !== JSON.stringify(user_answer) && (
              <Box>
                <h5>Correct  answer: </h5>
                <p>{JSON.stringify(user_answer)}</p>
              </Box>
            )}
          </>
        );
      })}
    </Box>
  );
};

export default Results;
