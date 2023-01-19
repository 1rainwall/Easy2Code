import MainEditor from "./components/MainEditor";

import "./App.css";
import EditorProvider from "./context/EditorContext";

function App() {
  return (
    <div className="App">
      <EditorProvider>
        <MainEditor />
      </EditorProvider>
    </div>
  );
}

export default App;
