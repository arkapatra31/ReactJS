import { createContext, /**useState**/ useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP__GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_FINDER_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  /** Reducer Part Start */
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  /** Reducer Part End */

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const {items} = await response.json();

    // setUsers(items);
    // setLoading(false);

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const setLoading = () => dispatch({ type: "LOAD_USERS" });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, searchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
