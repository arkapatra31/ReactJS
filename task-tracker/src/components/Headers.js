import PropTypes from "prop-types";
import Buttons from "./Buttons";

const Headers = (props) => {

  const onClick = () => {
    console.log('Button Clicked');
  }

  return (
    <header className = 'header'>
      <h1>{props.title}</h1>
      <Buttons color='Green' text='Add Task' onClick = {onClick}/>
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
