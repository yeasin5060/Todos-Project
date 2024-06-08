import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./userloginorsinginpage/login/Login";
import Signin from "./userloginorsinginpage/signin/Signin";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route></Route>
      <Route path="/" element = {<Login/>}/>
      <Route path="signup" element = {<Signin/>}/>
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
