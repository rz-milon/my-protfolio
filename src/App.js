import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import Skills from './Pages/Home/Skills/Skills';
import Contact from './Pages/Home/Contact/Contact';

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
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/portfolio',
          element:<Portfolio></Portfolio>
        },
        {
          path:'/skills',
          element:<Skills></Skills>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
