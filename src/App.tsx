import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import DashboardLayout from "./layout/dashboard-layout"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App