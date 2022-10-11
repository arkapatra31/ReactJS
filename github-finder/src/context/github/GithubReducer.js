const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "LOAD_USERS":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
