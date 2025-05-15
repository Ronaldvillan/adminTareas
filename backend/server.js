// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const taskRoutes = require('./routes/tasks');  // Importamos las rutas de las tareas

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors());  // Para permitir peticiones desde el frontend
app.use(express.json());  // Para recibir JSON en las peticiones

// Rutas
app.use('/api/tasks', taskRoutes);  // Usamos las rutas de tareas

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
