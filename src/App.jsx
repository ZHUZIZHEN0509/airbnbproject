import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import useScrollTop from "./hooks/useScrollTop";

function App() {
  //解决在上一个页面滚动到底部，下一个页面没有恢复
  useScrollTop();
  return (
    <div className="App">
      <AppHeader />
      {useRoutes(routes)}
      <AppFooter />
    </div>
  );
}

export default App;
