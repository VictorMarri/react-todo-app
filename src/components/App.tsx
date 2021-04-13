import { deflateSync } from 'node:zlib';
import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Navbar from './NavBar';
import TodoList from './TodoList';

const App = () => {
    return(
    <TodoContext>
        <div className="uk-container">
            <Navbar></Navbar>
            <TodoList></TodoList>
        </div>
    </TodoContext>
    );
}

export default App;