import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import DashboardLayout from "./layout/dashboard-layout"
import Marketplace from "./pages/marketplace"
import Upload from "./pages/upload"
import Collection from "./pages/collection"
import Profile from "./pages/profile"
import Notification from "./pages/notification"
import GenAI from "./pages/genAI"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DashboardLayout title="Home">
            <Home />
          </DashboardLayout>
        } />
        <Route path="/marketplace" element={
          <DashboardLayout title="Marketplace">
            <Marketplace />
          </DashboardLayout>
        } />
        <Route path="/upload" element={
          <DashboardLayout title="Upload Asset">
            <Upload />
          </DashboardLayout>
        } />
        <Route path="/collection" element={
          <DashboardLayout title="My Collection">
            <Collection />
          </DashboardLayout>
        } />
        <Route path="/profile" element={
          <DashboardLayout title="My Profile">
            <Profile />
          </DashboardLayout>
        } />
        <Route path="/notification" element={
          <DashboardLayout title="Notification">
            <Notification />
          </DashboardLayout>
        } />
        <Route path="/genai" element={
          <DashboardLayout title="Video Generator">
            <GenAI />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App