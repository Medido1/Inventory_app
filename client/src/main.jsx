import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppStateProvider } from './context/AppStateContext.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </GlobalProvider>
  </StrictMode>,
)
