import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Route/Route';



function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
