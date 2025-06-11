import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import DashboardLayout from "./layout/dashboard-layout"
const App = () => {
  return (
    <Router>
      <Routes>
        <DashboardLayout>
        <Route path="/" element={<Home />} />
        </DashboardLayout>
      </Routes>
    </Router>
  )
}

export default App