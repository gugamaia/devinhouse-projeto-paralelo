import React, { useState } from "react";
import "./App.css";
//Importando os componentes
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  const [inputText, setInputText] = useState ("");
  return (
    <div className="App">
      <header>
      <h1>Gu"s Todo List - ContaZap</h1>
    </header>
    <Form />
    <TodoList />
    </div>
  );
}

export default App;
