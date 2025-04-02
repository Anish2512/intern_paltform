import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './index.css'
import App from './App.jsx'
import AddCourses from './components/Admin/AddCourses.jsx'
import AssignedCourses from './components/Admin/AssignedCourses.jsx'
import AdminSidebar from './components/Admin/AdminSidebar.jsx'
import AdminDashboard from './components/Admin/AdminDashboard.jsx'
import QueryForum from './components/Forum/QueryForum.jsx'
import MapInterns from './components/Interns/MapInterns.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className="flex">
        <AdminSidebar />
        <div className="ml-64 flex-grow p-4">
          <Routes>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/add-courses" element={<AddCourses />} />
            <Route path="/assigned-courses" element={<AssignedCourses />} />
            <Route path="/query-forum" element={<QueryForum />} />
            <Route path="/map-interns" element={<MapInterns />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  </StrictMode>
)
