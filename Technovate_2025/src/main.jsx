import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothScrolling from './components/SmoothScrollingWrapper.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <SmoothScrolling>
    <App />
    </SmoothScrolling>
    </BrowserRouter>
)
