import { useParams } from "react-router-dom";
function TestPost() {
  const params = useParams();
  return <div>
    <h4>
    Post : {params.id}
    </h4>
    <h4>
    Author : {params.name}
    </h4>
  </div>;
}

export default TestPost;
