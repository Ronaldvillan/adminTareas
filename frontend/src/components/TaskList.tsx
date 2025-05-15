import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TaskItem from './TaskItem';
import { Task, fetchTasks, deleteTask } from '../api';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };

    loadTasks();
  }, []);

  const handleDelete = async (id: string) => { // Cambiado a 'string'
    const deletedId = await deleteTask(id); // Pasamos el id como 'string'
    if (deletedId) {
      setTasks(tasks.filter(task => task.id !== id)); // Filtro usando id como 'string'
    }
  };

  const handleEdit = (task: Task) => {
    navigate(`/tasks/${task.id}`);

  };

  return (
    <div className="task-list-container">
      <div className="header">
        <h2>Administrador de Tareas</h2>
        <Link to="/tasks/new">
          <button>Crear Nueva Tarea</button>
        </Link>
      </div>

      <div className="task-items">
        <h3>Lista de Tareas</h3>
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
