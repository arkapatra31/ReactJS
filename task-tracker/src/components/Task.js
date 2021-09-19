import { FaTimes, FaRegWindowClose } from "react-icons/fa";
const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "Red", cursor: "pointer" }}
          onClick={ () => onDelete(task.id) }
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
