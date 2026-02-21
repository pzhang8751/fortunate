import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import WritePage from './pages/WritePage.jsx'
import ReadPage from './pages/ReadPage.jsx'
import { Analytics } from '@vercel/analytics/react'

function Layout() {
  return (
    <>
      <Dashboard></Dashboard>
      <Outlet />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<App />}></Route>
          <Route path="read" element={<ReadPage />}></Route>
          <Route path="write" element={<WritePage />}></Route>
          <Route path="about" element={<App />}></Route>
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
