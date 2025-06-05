import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const rotas = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/perfil/:id',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
    <GlobalCss />
    <RouterProvider router={rotas} />
    </>
  )
}

export default App
