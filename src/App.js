import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Main from './Layout/Main';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/Skills',
        element:<Skills></Skills>
      },
      {
        path:'/portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
    ]
  }
]);


  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
