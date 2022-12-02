import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

function App() {
  return (
    <div className="App">
      <AppHeader />
      {useRoutes(routes)}
      <AppFooter />
    </div>
  );
}

export default App;
