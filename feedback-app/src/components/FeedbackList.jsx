import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
export default function FeedbackList({ feedBack, deleteFeedBack }) {
  if (feedBack === null || feedBack.length === 0) {
    return <p>No feedback yet !!!</p>;
  }

  //With Animation
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedBack.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={deleteFeedBack}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //Without Animation
  // return (
  //   <div className="feedback-list">
  //     {feedBack.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={deleteFeedBack} />
  //     ))}
  //   </div>
  // );
}

FeedbackList.propTypes = {
  //feedBack : PropTypes.array
  feedBack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
