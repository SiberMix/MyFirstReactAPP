import './App.css';
import {TodoList} from "./Todo/TodoList";
import React from "react";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить машину'},
        {id: 2, completed: false, title: 'Купить масло'},
        {id: 3, completed: false, title: 'Купить iphone'},
    ])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
                title: title,
                id: Date.now(),
                completed: false,
            }]))
    }

    function RemoveTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <Context.Provider value={{RemoveTodo}}>
            <div className='wrapper'>
                <h1>Чек Лист </h1>
                <AddTodo onCreate={addTodo}></AddTodo>
                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : <p>Нет Заданий</p>}

            </div>
        </Context.Provider>

    )
}

export default App;
