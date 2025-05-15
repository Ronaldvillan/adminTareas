import React from 'react';
import { Task } from '../api';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void; // Cambiado a 'string'
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
  return (
    <li className="task-item">
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p><strong>Completada:</strong> {task.completed ? 'Sí' : 'No'}</p>
        <p><strong>Fecha de creación:</strong> {new Date(task.createdAt).toLocaleString()}</p>
      </div>
      <div className="task-actions">
        <button className="delete" onClick={() => onDelete(task.id)}>Eliminar</button>
        <button className="edit" onClick={() => onEdit(task)}>Editar</button>
      </div>
    </li>
  );
};

export default TaskItem;

