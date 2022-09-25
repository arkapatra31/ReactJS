//import PropTypes from "prop-types";
//introducing context
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

function FeedbackStats(/**{ feedBack }**/) {
  const { feedBack, isLoading } = useContext(FeedbackContext);
  let avg = (
    feedBack.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedBack.length
  )
    .toFixed(1)
    .replace(/[.]0/, "");

  return isLoading ? (
   <></>
  ) : (
    <div className="feedback-stats">
      <h4>{feedBack.length} Reviews</h4>
      <h4>{isNaN(avg) ? 0 : avg} Average Rating</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   //feedBack : PropTypes.array
//   feedBack: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ),
// };

export default FeedbackStats;
