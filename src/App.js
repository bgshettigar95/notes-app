

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/RootLayout';
import NotesContainer from './components/NotesContainer';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <NotesContainer />,
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={router} >
      <div className="app">
      </div>
    </RouterProvider>

  );
}

export default App;
