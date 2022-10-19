import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
function User() {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;
