import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import DashboardLayout from "./layout/dashboard-layout"
import Marketplace from "./pages/marketplace"
import Upload from "./pages/upload"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        } />
        <Route path="/marketplace" element={
          <DashboardLayout>
            <Marketplace />
          </DashboardLayout>
        } />
        <Route path="/marketplace" element={
          <DashboardLayout>
            <Upload />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App