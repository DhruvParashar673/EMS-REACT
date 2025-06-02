import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login.jsx' 
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        < Login /> 
        <EmployeeDashboard />
        <AdminDashboard /> 
    </>
  )
}

export default App
