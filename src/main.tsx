import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<Contact />} />
        </Route>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
