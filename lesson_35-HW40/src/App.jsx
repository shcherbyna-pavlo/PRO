import InputFiled from "./components/InputFiled";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {

  return (
    <div className="App">
    <main className="container">
      <InputFiled />
      <TodoList />
    </main>
    </div>
  );
}

export default App;
