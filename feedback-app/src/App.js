import { useState } from "react";
import {v4 as uuidv4}from 'uuid';
import FeedbackData from "../src/data/FeedbackData";
import Header from "./components/Header";
//import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const deleteSelectedFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbackData(feedbackData.filter((data) => data.id !== id));
    }
  };

  const addNewFeedback = (newFeedBack) => {
    newFeedBack.id = parseInt(uuidv4());
    setFeedbackData([newFeedBack, ...feedbackData]);
  }

  return (
    <>
      <Header />
      <FeedbackForm addNewFeedback = {(review) => addNewFeedback(review)}/>
      <FeedbackStats feedBack={feedbackData} />
      <FeedbackList
        feedBack={feedbackData}
        deleteFeedBack={(id) => deleteSelectedFeedBack(id)}
      />
    </>
  );
}

export default App;
