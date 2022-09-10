import { useState } from "react";
import FeedbackData from '../src/data/FeedbackData'
import Header from "./components/Header";
//import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

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
    <FeedbackForm />
    <FeedbackStats feedBack = {feedbackData} />
    <FeedbackList feedBack = {feedbackData} deleteFeedBack = {(id) => deleteSelectedFeedBack(id)}/>
    </>
  );
}

export default App;
