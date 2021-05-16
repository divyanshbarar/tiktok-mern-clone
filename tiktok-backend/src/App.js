import Video from "./component/video"
import './App.css';

function App() {
  return (
    <div className="app">


      {/* container */}
      {/* videos */}
      <div className="app__videos">
        <Video />
        <Video />
      </div>

    </div>
  );
}

export default App;
