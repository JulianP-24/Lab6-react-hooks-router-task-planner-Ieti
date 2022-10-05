import React, { useState, useEffect } from "react";
import tasksService from "../../services/tasksService";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    tasksService.getTasks().then((response) => {
      console.log(response)
        setTasks(response);
    })
        
  }, []);

  function listProducts() {
    if (tasks) {
      console.log(tasks);
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
      <h1>Tasks: </h1>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Estado</th>
                <th>Asignado</th>
                <th>Fecha_Terminacion</th>
                <th>Fecha_Creacion</th>
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
