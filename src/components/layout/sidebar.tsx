import { FiHome, FiBox, FiPlus, FiFolder, FiUser, FiBell, FiVideo } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-20 h-screen bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8 fixed">
      {/* Placeholder for the user notification, if it needs to be here. Otherwise, it will be in the main content. */}
      
      {/* Navigation Icons */}
      <Link to="/" className={`sidebar-icon ${currentPath === "/" ? "text-blue-500" : "text-gray-700"}`}>
        <FiHome className="text-2xl" />
      </Link>
      
      <Link to="/marketplace" className={`sidebar-icon ${currentPath === "/marketplace" ? "text-blue-500" : "text-gray-700"}`}>
        <FiBox className="text-2xl" />
      </Link>
      
      <Link to="/upload" className={`${currentPath === "/upload" ? "text-blue-500 border-blue-500" : "text-gray-400 border-gray-400"}`}>
        <span className="text-4xl border-2 rounded-full p-2 hover:border-blue-500 hover:text-blue-500 block">
          <FiPlus />
        </span>
      </Link>
      
      <Link to="/collection" className={`sidebar-icon ${currentPath === "/collection" ? "text-blue-500" : "text-gray-700"}`}>
        <FiFolder className="text-2xl" />
      </Link>
      
      <Link to="/notification" className={`sidebar-icon ${currentPath === "/notification" ? "text-blue-500" : "text-gray-700"}`}>
        <FiBell className="text-2xl" />
      </Link>
      
      <Link to="/genai" className={`sidebar-icon ${currentPath === "/genai" ? "text-blue-500" : "text-gray-700"}`}>
        <FiVideo className="text-2xl" />
      </Link>
      
      <Link to="/profile" className={`sidebar-icon ${currentPath === "/profile" ? "text-blue-500" : "text-gray-700"}`}>
        <FiUser className="text-2xl" />
      </Link>
    </aside>
  )
}

export default Sidebar
