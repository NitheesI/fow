import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
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
          path:"/",
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