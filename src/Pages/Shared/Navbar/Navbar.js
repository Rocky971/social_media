import React from 'react';
import { Link } from 'react-router-dom';
import MessageModal from './MessageModal/MessageModal';
const Navbar = () => {
    return (
        <div className="navbar bg-[#6d1b7b] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 font-semibold text-lg font-sans bg-[#6d1b7b] text-white">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='profile'>Profile</Link></li>
                    </ul>
                </div>
                <a href className="btn btn-ghost normal-case text-xl hidden lg:flex md:flex">Founder</a>
                <MessageModal>
                    <button className='btn'>

                    </button>
                </MessageModal>
                <Link to='/login' className='btn btn-ghost btn-circle avatar ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                </Link>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg font-sans">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='profile'>Profile</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <form className='md:flex'>
                        <input type="text" placeholder="Search" className="input input-bordered hidden lg:block md:block text-black" />
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-white ring-offset-2">
                        <img src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/318464458_690254716150691_1009780538691099489_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFiiq8AmvDTIxfBlV9tjoS9oulRsdGaPRui6VGx0Zo9G7PHI0aZ1WMXToJv9fvCg85FmYElgRYc0JfSTAsW1YKx&_nc_ohc=ib-9vkqwF_YAX9OhDw6&tn=w8WFrIpV9Pq5a4QY&_nc_ht=scontent.fspd3-1.fna&oh=00_AfABpFWgLsB28URw4-YbLd-_qoFDjxRLiNRUI-Ppuip1UQ&oe=63B17F94" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;