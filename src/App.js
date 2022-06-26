import QueueVisual from "./queue/queue-visual";
import "./App.css";
import Navbar from "./navbar";

function App() {
  return (
    <div className="container-fluid App">
      <Navbar />
      <QueueVisual />
    </div>
  );
}

export default App;
