import { RouterProvider } from "react-router-dom";
import route from "./Components/Router/Router";
import "./Styles/App.css";

function App() {
  return (
    <>
      <section>
        <RouterProvider router={route}></RouterProvider>
      </section>
    </>
  );
}

export default App;
