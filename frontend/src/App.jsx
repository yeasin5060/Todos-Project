import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./userloginorsinginpage/login/Login";
import Signin from "./userloginorsinginpage/signin/Signin";
import Homepage from "./pages/homepage/Homepage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route>
        <Route path="/home" element={<Homepage/>}/>
       </Route>
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
