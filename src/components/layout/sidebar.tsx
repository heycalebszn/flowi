import { FiHome, FiBox, FiPlus, FiFolder, FiUser } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8">
      {/* Placeholder for the user notification, if it needs to be here. Otherwise, it will be in the main content. */}
      
      {/* Navigation Icons */}
      <FiHome className="text-2xl cursor-pointer hover:text-blue-500" /> {/* Home Icon */}
      <FiBox className="text-2xl cursor-pointer hover:text-blue-500" /> {/* Box/Inventory Icon */}
      <span className="text-4xl text-gray-400 border-2 border-gray-400 rounded-full p-2 cursor-pointer hover:border-blue-500 hover:text-blue-500"><FiPlus /></span> {/* Plus Icon */}
      <FiFolder className="text-2xl cursor-pointer hover:text-blue-500" /> {/* Folder Icon */}
      <FiUser className="text-2xl cursor-pointer hover:text-blue-500" /> {/* Profile Icon */}
    </aside>
  )
}

export default Sidebar
