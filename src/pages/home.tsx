import { FiFilter, FiMenu, FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* User notification/status bar */}
      <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg shadow-sm mb-6 max-w-sm">
          <img src="https://via.placeholder.com/24" alt="user avatar" className="rounded-full w-6 h-6" />
          <p className="text-sm">
              <span className="font-semibold">aSiliko</span> bought <span className="font-semibold">1.5k</span> of <span className="font-semibold">Baby Robot of Openfind</span>
          </p>
          <img src="https://via.placeholder.com/24" alt="item preview" className="rounded-md w-6 h-6" />
      </div>

      {/* Filter and Search Bar */}
      <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <FiFilter className="text-sm" />
                  <span>Filter</span>
              </button>
              <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 w-72">
                  <FiMenu className="text-sm text-gray-500 mr-2" />
                  <input type="text" placeholder="Hinted search text" className="flex-1 outline-none text-sm" />
                  <FiSearch className="text-gray-500" />
              </div>
          </div>
      </div>

      {/* Category/Price/Ownership/Creator Dropdowns */}
      <div className="flex space-x-4 mb-8">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white">
              <option>All Categories</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white">
              <option>Price</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white">
              <option>Ownership</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white">
              <option>Creator</option>
          </select>
      </div>

      {/* Trending / Top Creators / New Tabs */}
      <div className="flex space-x-8 mb-8 border-b-2 border-gray-200">
          <button className="pb-2 font-bold border-b-2 border-black">Trending</button>
          <button className="pb-2 text-gray-500 hover:text-black">Top Creators</button>
          <button className="pb-2 text-gray-500 hover:text-black">New</button>
      </div>
    </div>
  )
}

export default Home;