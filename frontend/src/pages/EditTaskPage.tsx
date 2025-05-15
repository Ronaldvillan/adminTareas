import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { Task } from '../task';
import { updateTask } from '../api';

interface EditTaskPageProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const EditTaskPage: React.FC<EditTaskPageProps> = ({ tasks, setTasks }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const taskToEdit = tasks.find(task => String(task.id) === id);

  const handleUpdate = async (updatedTask: Task) => {
    if (!taskToEdit) return;

    const taskWithoutId: Omit<Task, "id"> = {
      ...updatedTask,
      createdAt: taskToEdit.createdAt, // Aseguramos mantener la fecha original
    };

    const updated = await updateTask(updatedTask.id, taskWithoutId);

    if (updated) {
      setTasks(prev =>
        prev.map(t => (t.id === updated.id ? updated : t))
      );
      navigate('/');
    }
  };

  if (!taskToEdit) return <div>Tarea no encontrada</div>;

  return <TaskForm taskToEdit={taskToEdit} onSubmit={handleUpdate} />;
};

export default EditTaskPage;

