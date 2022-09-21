import { createContext, useState } from "react";

const FeedbackContext = createContext();

//provider
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from context",
      rating: 10,
    },
  ]);
  return (
    <FeedbackContext.Provider
      value={{
        feedBack : feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
