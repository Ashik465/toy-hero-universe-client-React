import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";


const Navbar = () => {
  const {user,logout } = useContext(AuthContext)


    //log out 
const handleLogout =()=>{
  logout()
  .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    });
}
    return (
        <>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li> <NavLink className='font-bold' to="/">Home</NavLink></li>
      <li> <NavLink className='font-bold' to="/alltoys">All Toys</NavLink></li>
     {user ?.email &&  <li> <NavLink className='font-bold' to="/mytoys">My Toys</NavLink></li>}
      {user?.email && <li> <NavLink className='font-bold' to="/addtoy">Add a Toy</NavLink></li>}
      <li> <NavLink className='font-bold' to="/blog">Blogs</NavLink></li>
      </ul>
    </div>
    <Link to ='/' className="btn btn-ghost normal-case text-lg font-bold sm:text-4xl ">  <span className="text-red-600 ">Toy</span>Hero  <span className="text-red-600 ml-1">Uni</span>verse</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink className='font-bold' to="/">Home</NavLink></li>
      <li> <NavLink className='font-bold' to="/alltoys">All Toys</NavLink></li>
     {user ?.email &&  <li> <NavLink className='font-bold' to="/mytoys">My Toys</NavLink></li>}
      {user?.email && <li> <NavLink className='font-bold' to="/addtoy">Add a Toy</NavLink></li>}
      <li> <NavLink className='font-bold' to="/blog">Blogs</NavLink></li>
     
      
    </ul>
  </div>
  <div className="navbar-end">
    {/* //picture */}
  {user?.email ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <a  id="my-anchor-element"><img  src={user?.photoURL
} /></a> <Tooltip anchorSelect="#my-anchor-element"
content={user.displayName}></Tooltip>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><Link onClick={handleLogout} to="/login" >Logout</Link></li>
      </ul>
    </div> : <Link to="/login" className="btn btn-main">Login</Link>}
    {/* picture end  */}
  </div>
</div>
        </>
    );
};

export default Navbar;