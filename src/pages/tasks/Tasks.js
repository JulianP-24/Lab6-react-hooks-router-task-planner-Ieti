import React, { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  function listProducts() {
    if (tasks) {
      return tasks.map((task) => {
        return (
          <tr key={task.id}>
            <td>{task.productName}</td>
            <td>{task.descripcion}</td>
            <td>{task.precio}</td>
            <td>{task.vendedor.name}</td>
          </tr>
        );
      });
    }
  }

  return <div>Tasks</div>;
}

export default Tasks;
