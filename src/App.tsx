import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import DashboardLayout from "./layout/dashboard-layout"
import Marketplace from "./pages/marketplace"

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
      </Routes>
    </Router>
  )
}

export default App