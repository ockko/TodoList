import "./App.css";
import Header from "./comonents/Header";
import Editor from "./comonents/Editor";
import List from "./comonents/List";

function App() {
  let date = new Date();

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
