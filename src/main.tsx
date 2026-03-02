import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider as ChakraProvider } from './components/ui/provider'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <ChakraProvider>
              <RouterProvider router={router}></RouterProvider>
        </ChakraProvider>
  </StrictMode>,
)
