import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/home',
          element:<Home/>
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
