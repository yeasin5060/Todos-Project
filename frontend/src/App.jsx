import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./userloginorsinginpage/login/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route></Route>
      <Route path="/" element = {<Login/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
