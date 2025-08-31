import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppStateProvider } from './context/AppStateContext.jsx'
import { BooksProvider } from './context/BooksContext.jsx'
import { UIProvider } from './context/UIContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIProvider>
      <AppStateProvider>
        <BooksProvider>
          <App />
        </BooksProvider>
      </AppStateProvider>
    </UIProvider>
  </StrictMode>,
)
