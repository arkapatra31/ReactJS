import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

//provider
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(`/feedback?_sort=id&order=desc`);
    setFeedback(await resp.json());
    setIsLoading(false);
  };

  const addNewFeedback = async (newFeedBack) => {
    //newFeedBack.id = parseInt(uuidv4());
    //setFeedback([newFeedBack, ...feedback]);
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedBack),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const deleteSelectedFeedBack = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((data) => data.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = async (id, updtItem) => {

    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updtItem),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedBack: feedback,
        addNewFeedback,
        deleteSelectedFeedBack,
        editFeedback,
        updateFeedback,
        feedbackEdit,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
