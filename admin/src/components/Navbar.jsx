
const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <h1>Admin-ShopWithAjji</h1>
      <button onClick={()=>setToken("")} className="bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm">Logout</button>
    </div>
  )
}

export default Navbar
