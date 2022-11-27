import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <div className="App">
       <h1>头部</h1>
       {useRoutes(routes)}
       <h1>底部</h1>
    </div>
  );
}

export default App;
