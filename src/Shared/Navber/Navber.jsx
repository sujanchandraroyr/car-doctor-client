import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Navber = () => {

  // const { user } = useContext(AuthContext);
  const {user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
      .catch(error => {
        console(error.message)
      })
  }

  const navlinks = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>


    {
      user?.email ? <>
        <li><button onClick={handleLogOut} >Sign Out</button></li>
        <li><Link to="/bookings">My Bookings</Link></li>
      </> :
      <>
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/login">Login</Link></li>
      </>
    }

  </>
  return (
    <div className="navbar bg-base-100 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img className='w-full h-full' src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default Navber;