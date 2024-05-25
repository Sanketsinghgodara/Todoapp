import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setData("");
    setTodos([...todos, data]);
  };
  const DeleteTask = (ind) => {
    const newtodo = todos.filter((Item, index) => index !== ind);
    setTodos(newtodo);
  };
  return (
    <div className="container">
      <h2>This is my TO DO list for today</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Create todo</button>
      </form>
      <ul>
        {todos.map((item, ind) => {
          return (
            <div>
              <li key={ind} >
                {item}
                <button className="delete-btn" onClick={() => DeleteTask(ind)}>
                  X
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
