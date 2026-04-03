import axios from "axios";

//default auth header
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const addTodo = async (data) => {
    try {
        const response = await axios.post('/api/v1/todo/create', data);   
        return response.data;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
};

export const getTodos = async (userId) => {
    try {
        const response = await axios.get(`/api/v1/todo/getAll/${userId}`);
        return response.data.todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const deleteTodo = async (id) => {
    try {
        const response = await axios.post(`/api/v1/todo/delete/${id}`);
        return response.data;
    }
    catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};

export const updateTodo = async (id, data) => {
    try {
        const response = await axios.patch(`/api/v1/todo/update/${id}`, data);
        return response.data;
    }
    catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};

const TodoService = {
    createTodo: addTodo,
    getTodos: getTodos,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo
};
export default TodoService;
