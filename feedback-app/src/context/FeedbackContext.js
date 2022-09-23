import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

//provider
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addNewFeedback = (newFeedBack) => {
    newFeedBack.id = parseInt(uuidv4());
    setFeedback([newFeedBack, ...feedback]);
  };

  const deleteSelectedFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((data) => data.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updtItem) => {
    setFeedback(
      feedback.map((item) => item.id === id ? {...item, ...updtItem} : item)
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
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
