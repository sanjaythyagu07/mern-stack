import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { myStore } from './Redux/Config';
import{Provider} from 'react-redux'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';



const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
<Provider  store={myStore} >
    <div>

<RouterProvider router={router} />
<Header/>
    </div>
    </Provider>   
  );
}

export default App;
