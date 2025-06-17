import { FiBell, FiEdit, FiCreditCard, FiMenu } from "react-icons/fi";

interface NavbarProps {
  title: string;
}

const Navbar = ({ title = "Upload Asset" }: NavbarProps) => {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Flowi.</h1>
      </div>
      <div className="flex-grow text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="flex items-center space-x-4">
        <FiBell className="text-xl cursor-pointer" />
        <FiEdit className="text-xl cursor-pointer" />
        <FiCreditCard className="text-xl cursor-pointer" />
        <FiMenu className="text-xl cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar;