import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { Task } from '../task';
import { createTask } from '../api';

interface NewTaskPageProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const NewTaskPage: React.FC<NewTaskPageProps> = ({ tasks, setTasks }) => {
  const navigate = useNavigate();

  const handleCreate = async (newTask: Task) => {
    const created = await createTask(newTask);
    if (created) {
      setTasks([...tasks, created]);
      navigate('/');
    }
  };

  return <TaskForm onSubmit={handleCreate} />;
};

export default NewTaskPage;


