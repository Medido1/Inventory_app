import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppStateProvider } from './context/AppStateContext.jsx'
import { BooksProvider } from './context/BooksContext.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <AppStateProvider>
        <BooksProvider>
          <App />
        </BooksProvider>
      </AppStateProvider>
    </GlobalProvider>
  </StrictMode>,
)
