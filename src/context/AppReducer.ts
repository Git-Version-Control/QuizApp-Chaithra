type State = {
  answers: any;
};

type Action = {
  type: string;
  payload: {
    id: string;
    data: any;
  };
};

export default function appReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_ANSWER":
      return {
        answers: {
          ...state.answers,
          [action.payload.id]: action.payload.data,
        },
      };
    default:
      throw new Error();
  }
}
