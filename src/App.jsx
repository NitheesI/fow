import Header from "./components/header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

function App(){
  function Layout(){
    return <div>
      <Header/>
      <Outlet/>
    </div>

  }
  let r=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
      path:"/body",
      element:<Body/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/cart",
      element:<Cart/>
    }
      ]
    }
    
  ])
  return <div>
    <RouterProvider router={(r)}></RouterProvider>

  </div>

}

export default App