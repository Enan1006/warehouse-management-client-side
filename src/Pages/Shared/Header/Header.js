import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to='/'
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"

                        >
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            <span className='ml-3'>E-smart</span>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to='/about'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className="fa-solid fa-user text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/manage-items'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className="fa-solid fa-user text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Manange Item</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/additem'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className="fa-solid fa-user text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Add Item</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blogs'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className="fa-solid fa-blog text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blogs</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user ?

                                        <div className='flex'>
                                            <img className='w-10 h-10 rounded-full' src={user.photoURL} alt='' />
                                            <span className='mt-2 pr-5 text-white'>{user.displayName}</span>
                                            <button onClick={logout}
                                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug bg-red-200 rounded-lg font-semibold mt-2 text-red-600 hover:opacity-75"

                                            >
                                                <i className="fa-solid fa-arrow-up-left-from-circle text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Logout</span>
                                            </button>
                                        </div>
                                        :
                                        <div className='flex'>
                                            <li className="nav-item">
                                                <Link to='/login'
                                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                                >

                                                    <i className="fa-solid fa-arrow-right-to-bracket text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to='/register'
                                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                                >
                                                    <i className="fa-solid fa-right-to-bracket text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Register</span>
                                                </Link>
                                            </li>
                                        </div>
                                }
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;