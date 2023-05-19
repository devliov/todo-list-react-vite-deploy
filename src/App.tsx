import { Header } from "./components/header/Header";
import { TodoList } from "./components/box-tasks/Box-tasks";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
