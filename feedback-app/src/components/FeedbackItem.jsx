//import {useState} from 'react';
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item /**handleDelete**/ }) {
  // const [rating, setRating] = useState(item.rating);
  // const [feedback, setFeedback] = useState(item.text);
  const { deleteSelectedFeedBack, editFeedback } = useContext(FeedbackContext);
  return (
    //<div className='card'>
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="edit" onClick={ () => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <button
        className="close"
        onClick={() => {
          deleteSelectedFeedBack(item.id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
    //</div>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
