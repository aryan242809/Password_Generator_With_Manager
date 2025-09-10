import { createRoot } from 'react-dom/client'
import Pass from './Pass'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Pass />
    </BrowserRouter>
)
