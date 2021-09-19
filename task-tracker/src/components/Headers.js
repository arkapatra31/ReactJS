import PropTypes from "prop-types";

const Headers = (props) => {
  return (
    <header className = 'header'>
      <h1>{props.title}</h1>
      <button className = 'btn'>Add</button>
    </header>
  );
};

Headers.defaultProps = {
  title: "Task Tracker App",
};

Headers.propTypes = {
  title: PropTypes.string,
};

export default Headers;
