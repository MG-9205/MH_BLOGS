import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Home from './Pages/Home'
import Master from './Pages/Master'
import CreateBlog from './Pages/CreateBlog'
import LoginAndSignup from './Pages/LoginAndSignup'
import UserState from "./Context/userContext/userState";
import Profile from './Pages/Profile';
import Sidebar1Sate from './Context/mhBlogState'
import SingleBLog from './Pages/SingleBLog'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Master/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/CreateBlog",
        element:<CreateBlog/>
      },
      {
        path:"/Profile",
        element:<Profile/>
      },
      {
        path:"/SingleBlog",
        element:<SingleBLog/>
      }
    ]
  },
  {
    path:"/LoginPage",
    element:<LoginAndSignup/>
  }
])

function App() {


  return (
    <>
    <Sidebar1Sate>
  <UserState>
   <RouterProvider router={router}/>
   </UserState>
   </Sidebar1Sate>
    </>
  )
}

export default App
