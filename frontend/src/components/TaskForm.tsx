import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Task } from '../task';

interface TaskFormProps {
  onSubmit: (task: Task) => Promise<void>;
  taskToEdit?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, taskToEdit }) => {
  const navigate = useNavigate(); // Llama a useNavigate para obtener navigate
  const [task, setTask] = useState<Task>({
    id: '',
    title: '',
    description: '',
    completed: false,
    createdAt: new Date(),
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask({
        ...taskToEdit,
        createdAt: taskToEdit.createdAt ? new Date(taskToEdit.createdAt) : new Date(),
      });
    }
  }, [taskToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(task);
    navigate('/'); // Ahora se usa navigate después del submit
  };

  return (
    <div className="task-form-container">
      <h2 className="form-title">{taskToEdit ? 'Editar Tarea' : 'Crear Nueva Tarea'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="completed">Completada:</label>
          <input
            type="checkbox"
            id="completed"
            checked={task.completed}
            onChange={(e) => setTask({ ...task, completed: e.target.checked })}
          />
        </div>
        <button type="submit">{taskToEdit ? 'Actualizar Tarea' : 'Crear Tarea'}</button>
        <button className="back-button" onClick={() => navigate('/')}> Volver a la página principal</button>
      </form>
      
    </div>
  );
};

export default TaskForm;
