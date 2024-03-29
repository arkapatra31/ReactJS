import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
//import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import TestPost from "./components/TestPost";
import Post from "./components/Post";

//importing for Context
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  //const [feedbackData, setFeedbackData] = useState(FeedbackData);

  //This delete method is moved to context
  // const deleteSelectedFeedBack = (id) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedbackData(feedbackData.filter((data) => data.id !== id));
  //   }
  // };

  //This add method is moved to context
  // const addNewFeedback = (newFeedBack) => {
  //   newFeedBack.id = parseInt(uuidv4());
  //   setFeedbackData([newFeedBack, ...feedbackData]);
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm
                    //addNewFeedback={(review) => addNewFeedback(review)}
                  />
                  <FeedbackStats
                  //feedBack={feedbackData} passed in context
                  />
                  <FeedbackList
                    //feedBack={feedbackData} passed in context
                    //deleteFeedBack={(id) => deleteSelectedFeedBack(id)} passed in context
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testpost/:id/:name" element={<TestPost />} />
            <Route path="/post" element={<Post />} />
          </Routes>
          <Link to="/about">
            <AboutIconLink />
          </Link>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
