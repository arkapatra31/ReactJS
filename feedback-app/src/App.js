import { useState } from "react";
import FeedbackData from '../src/data/FeedbackData'
import Header from "./components/Header";
//import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  
  
  const deleteSelectedFeedBack = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedbackData(feedbackData.filter((data) => data.id !== id))
    }
  }
  
  
  return (
    <>
    <Header />
      <FeedbackList feedBack = {feedbackData} deleteFeedBack = {(id) => deleteSelectedFeedBack(id)}/>
    </>
  );
}

export default App;
