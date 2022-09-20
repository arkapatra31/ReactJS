import { Navigate, useNavigate } from "react-router-dom";
function Post() {
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      Post
      <div><button onClick={onClick}>Click</button></div>
    </div>
  );
}

export default Post;
