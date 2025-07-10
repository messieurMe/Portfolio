import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import {HeroUIProvider} from "@heroui/react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HeroUIProvider>
            <main className="dark text-foreground bg-background h-screen">
                <App/>
            </main>
        </HeroUIProvider>
    </StrictMode>,
)
