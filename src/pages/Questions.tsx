import { useEffect, useState, useContext } from "react";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import questions from "../questions.json";
import { Box, Button, Typography, CircularProgress,PaginationItem, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import QuestionHighlighting from "../components/QuestionHighllighting";
import { AppContext } from "../App";
import { height, padding } from "@mui/system";

const TOTAL_QUESTIONS = questions.length;
let answer: boolean = true;

const Questions = () => { 
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  const [isLoading, setIsLoading] = useState(true);
  const [appData] = useContext(AppContext);
  const navigate = useNavigate();
  //const { question } = questions;


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  let answered=Object.keys(appData.answers)??[]

  function handleNextButtonClick(index: number) {
    if (index === TOTAL_QUESTIONS - 1) {
      navigate("/results");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  function handleChangeOfQuestion(event: React.ChangeEvent<unknown>, value: number) {
    setCurrentQuestion(value);
  }


  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {
        isLoading ? "" : (
          <Box
            height="80px"
            marginBottom="650px"
            marginLeft="10px"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pagination
              sx={{
                transform: "scale(1.5)",
                bgcolor:"white",
                margin:"5px"
              }}
              className="paginate"
              count={TOTAL_QUESTIONS}
              page={currentQuestion}
              siblingCount={2}
              boundaryCount={2}
              size="large"
              onChange={handleChangeOfQuestion}
              renderItem={
                (item) => {
                  let colorTheme = "black"
                  let currentPage = item.page?.toLocaleString() ?? "0"
                  if (
                    answered.indexOf(item.page?.toLocaleString() ?? "0") >= 0
                    && item.type === "page"
                    && appData.answers[currentPage].value
                    && appData.answers[currentPage].value.length > 0
                  ) {
                    colorTheme = "green"
                  }
                  return (
                    <PaginationItem
                      sx={{
                        color: colorTheme,
                        "&:focus": { color: "yellow" },
                        "&:active": { color: "white" },
                        "&:visited": { color: "green" },
                        "&:hover": { bgcolor: "white" }
                      }}
                      {...item}
                    />
                  )
                }
              }
            />
          </Box>
        )
      }
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
                  <Box
                  height="500px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  fontSize={24}
                   >
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

                    {/*<QuestionHighlighting answered={answer} current={question.id} />*/}
                    </Box>
                  </Box>
                </Box>
              </>
            )
        )
      )}
       
      
    </Box>
  );
};

export default Questions;
