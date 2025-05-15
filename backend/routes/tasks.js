// backend/routes/tasks.js

const express = require('express');
const router = express.Router();
let tasks = [
  { id: 1, title: 'Estudiar JavaScript', description: 'Repasar conceptos básicos', completed: false },
  { id: 2, title: 'Hacer ejercicio', description: 'Correr 30 minutos', completed: false },
];

// Obtener todas las tareas
router.get('/', (req, res) => {
  res.json(tasks);  
});

// Crear una nueva tarea
router.post('/', (req, res) => {
  const { title, description, completed } = req.body;
  const newTask = {
    id: tasks.length + 1,  
    title,
    description,
    completed
  };
  tasks.push(newTask);  
  res.status(201).json(newTask);  
});

// Actualizar una tarea
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  tasks[taskIndex] = { id: parseInt(id), title, description, completed };
  res.json(tasks[taskIndex]);  
});

// Eliminar una tarea
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  tasks.splice(taskIndex, 1); 
  res.status(204).send();
});

module.exports = router;

  