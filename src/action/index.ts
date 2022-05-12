export const actions = {
  setAnswer(id: number, value: any, type: string) {
    return {
      type: "SET_ANSWER",
      payload: {
        id,
        data: {
          type,
          value,
        },
      },
    };
  },
};
