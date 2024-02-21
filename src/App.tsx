import List from "./components/List";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      {/* todo-box */}
      <div className="todo-wrapper">
        {/* todo-text */}
        <div className="todo-text-box">
          <Text />
        </div>

        {/* todo-list */}
        <div className="todo-list">
          <ul>
            <List />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
