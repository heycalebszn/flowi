import { FiHome, FiBox, FiPlus, FiFolder, FiUser, FiBell, FiVideo } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8">
      {/* Placeholder for the user notification, if it needs to be here. Otherwise, it will be in the main content. */}
      
      {/* Navigation Icons */}
      <Link to="/" className={currentPath === "/" ? "text-blue-500" : ""}>
        <FiHome className="text-2xl cursor-pointer hover:text-blue-500" />
      </Link>
      
      <Link to="/marketplace" className={currentPath === "/marketplace" ? "text-blue-500" : ""}>
        <FiBox className="text-2xl cursor-pointer hover:text-blue-500" />
      </Link>
      
      <Link to="/upload" className={currentPath === "/upload" ? "text-blue-500" : ""}>
        <span className="text-4xl text-gray-400 border-2 border-gray-400 rounded-full p-2 cursor-pointer hover:border-blue-500 hover:text-blue-500">
          <FiPlus />
        </span>
      </Link>
      
      <Link to="/collection" className={currentPath === "/collection" ? "text-blue-500" : ""}>
        <FiFolder className="text-2xl cursor-pointer hover:text-blue-500" />
      </Link>
      
      <Link to="/notification" className={currentPath === "/notification" ? "text-blue-500" : ""}>
        <FiBell className="text-2xl cursor-pointer hover:text-blue-500" />
      </Link>
      
      <Link to="/genai" className={currentPath === "/genai" ? "text-blue-500" : ""}>
        <FiVideo className="text-2xl cursor-pointer hover:text-blue-500" />
      </Link>
      
      <Link to="/profile" className={currentPath === "/profile" ? "text-blue-500" : ""}>
        <FiUser className="text-2xl cursor-pointer hover:text-blue-500" />
      </Link>
    </aside>
  )
}

export default Sidebar
