import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelection from "./RatingSelection";

function FeedbackForm({addNewFeedback}) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === '' || text.trim().length < 1) {
      setBtnDisabled(true);
      setMessage("Review cannot be empty");
    } else if (text !== "" && text.trim().length < 10){
      setBtnDisabled(true);
      setMessage("Review must contain at least 10 characters");
    }
    else{
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length >= 10){
        const newFeedBack = {
          text,
          rating
        }
        addNewFeedback(newFeedBack);
        setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Select your rating</h2>
        <RatingSelection select = {(id) => setRating(id)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button
            type="submit"
            isDisabled={btnDisabled} /*version="secondary"*/
          >
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
