import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import EditTaskPage from './pages/EditTaskPage';
import NewTaskPage from './pages/NewTaskPage';
import { Task } from './task';
import { fetchTasks } from './api';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TaskListWrapper tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/tasks/new"
          element={<NewTaskPageWrapper tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/tasks/:id"
          element={<EditTaskPageWrapper tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </Router>
  );
};

// Wrappers para pasar props a los componentes

const TaskListWrapper: React.FC<{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}> = ({ tasks, setTasks }) => <TaskList tasks={tasks} setTasks={setTasks} />;

const NewTaskPageWrapper: React.FC<{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}> = ({ tasks, setTasks }) => <NewTaskPage tasks={tasks} setTasks={setTasks} />;

const EditTaskPageWrapper: React.FC<{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}> = ({ tasks, setTasks }) => <EditTaskPage tasks={tasks} setTasks={setTasks} />;

export default App;
