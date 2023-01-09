import axios from "axios";
import { useEffect, useState } from "react";
function BackendInfo() {
  const [resp, setResp] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/welcome");
        setResp(await response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{resp}</div>;
}

export default BackendInfo;
