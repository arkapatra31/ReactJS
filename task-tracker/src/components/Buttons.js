import PropTypes from "prop-types";
const Buttons = ({ color, text, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick = {onClick} className="btn">
      {text}
    </button>
  );
};

Buttons.defaultProps = {
  text: "Add",
  color: "steelblue",
};

Buttons.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Buttons;
