import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure document direction is set to LTR
document.documentElement.dir = 'ltr';
document.documentElement.lang = 'en';

// Create root and render app
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
