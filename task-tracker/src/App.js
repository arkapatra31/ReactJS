import Headers from "./components/Headers";
import Tasks from "./components/Tasks";
import { useState } from "react";

import data from "./mockJSON/data.json";

function App() {
  const [tasks, setTasks] = useState(data);
  const deleteTask = (id) => {
    setTasks(tasks.filter((eachTask) => eachTask.id !== id))
  }
  return (
    <div className="container">
      <Headers />
      {tasks.length > 0 ? <Tasks tasks= {tasks} onDelete = {deleteTask}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
