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

Notas importantes:

- Verificar que el puerto 5000 esté libre o cambiarlo en backend/.env y frontend/.env simultáneamente.
- El backend necesita la dependencia 'dotenv', por eso se debe instalar explícitamente.
- Siempre arrancar primero el backend para que el frontend pueda comunicarse correctamente.
- En caso de dudas o errores, revisar que las variables de entorno estén bien configuradas.

---

📸 Capturas de la aplicación

A continuación se presentan imágenes del funcionamiento de la app para una mejor comprensión:

🏠 Página principal
![Página principal](./frontend/src/assets/paginaPrincipal.PNG)

➕ Crear nueva tarea
![Formulario de creación](./frontend/src/assets/formularioCrearNuevaTarea.PNG)

✏️ Tarea editada
![Tarea editada](./frontend/src/assets/tarjetaEditada.PNG)

🗑️ Tarea eliminada
![Tarea eliminada](./frontend/src/assets/tarjetaEliminada.PNG)
