const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

type RawTask = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: string;
};

// Manejo centralizado de errores con el tipo 'unknown' en lugar de 'any'
const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message; // Si el error es una instancia de Error, devolvemos su mensaje
  }
  return 'Ocurrió un error desconocido'; // Si el error no es una instancia de Error, devolvemos un mensaje genérico
};

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) {
      const errorMessage = await response.text(); // Obtener el mensaje del servidor si está disponible
      throw new Error(errorMessage || 'Error al obtener las tareas');
    }
    const data: RawTask[] = await response.json();
    return data.map((task) => ({
      ...task,
      createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
    }));
  } catch (error) {
    console.error(handleError(error));
    return [];
  }
};

export const fetchTask = async (id: string): Promise<Task> => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al obtener la tarea');
    }
    const data: RawTask = await response.json();
    return {
      ...data,
      createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
    };
  } catch (error) {
    console.error(handleError(error));
    throw new Error('Error al obtener la tarea');
  }
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al crear la tarea');
    }
    const data: RawTask = await response.json();
    return {
      ...data,
      createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
    };
  } catch (error) {
    console.error(handleError(error));
    return {
      id: '',
      title: '',
      description: '',
      completed: false,
      createdAt: new Date(),
    };
  }
};

export const updateTask = async (
  id: string,
  task: Omit<Task, 'id'>
): Promise<Task | void> => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al actualizar la tarea');
    }
    const data: RawTask = await response.json();
    return {
      ...data,
      createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
    };
  } catch (error) {
    console.error(handleError(error));
  }
};

export const deleteTask = async (id: string): Promise<string | void> => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al eliminar la tarea');
    }
    return id;
  } catch (error) {
    console.error(handleError(error));
  }
};
