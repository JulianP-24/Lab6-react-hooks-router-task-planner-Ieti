import React, { useState, useEffect } from "react";
import tasksService from "../../services/tasksService";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    tasksService.getTasks().then((response) => response.json())
      .then(json => {
        console.log(json)
        setTasks(json);
    })
  }, []);

  function listProducts() {
    if (tasks) {
      return tasks.map((task) => {
        return (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.descripcion}</td>
            <td>{task.status}</td>
            <td>{task.assignedTo}</td>
            <td>{task.dueDate}</td>
            <td>{task.createdAt}</td>
          </tr>
        );
      });
    }
  }

  return (
    <div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Estado</th>
                <th>Asignado</th>
                <th>Fecha Terminacion</th>
                <th>Fecha Creacion</th>
              </tr>
            </thead>
            <tbody>{listProducts()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
