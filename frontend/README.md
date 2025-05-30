- Ejecutar:
  git clone https://github.com/Ronaldvillan/adminTareas.git
  cd adminTareas

2. Configurar variables de entorno

   - Backend: crear archivo .env en backend/ con:
     PORT=5000

     - Asegurarse que el puerto 5000 esté libre.
     - Si cambia el puerto, actualizar también la URL en frontend/.env.

   - Frontend: crear archivo .env en frontend/ con:
     VITE_API_URL=http://localhost:5000/api
     - Cambiar el puerto en esta URL si el backend corre en otro.

3. Instalar dependencias

   - Backend:
     cd backend
     npm install
     npm install dotenv # importante para variables de entorno

   - Frontend:
     cd ../frontend
     npm install

4. Levantar el proyecto

   - Backend (desde backend/):
     node server.js

     - Debería mostrar: Servidor corriendo en el puerto 5000

   - Frontend (desde frontend/):
     npm run dev
     - Abrir la URL que muestra la terminal (normalmente http://localhost:5173/)

5. Uso
   - Probar la aplicación en el navegador y verificar que se comunique correctamente con el backend.
   - Confirmar que listar, crear y editar tareas funcione bien.



Imagenes del funcionamiento de la app para una mejor comprensión:

🏠 Página principal  
![Página principal](src/assets/paginaPrincipal.PNG)

➕ Crear nueva tarea  
![Formulario de creación](src/assets/formularioCrearNuevaTarea.PNG)

✏️ Tarea editada  
![Tarea editada](src/assets/tarjetaEditada.PNG)

🗑️ Tarea eliminada  
![Tarea eliminada](src/assets/tarjetaEliminada.PNG)
