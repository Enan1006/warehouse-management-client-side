import React from 'react';
import registerImg from '../../../Images/login/signup.jpg';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRef } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.from?.state?.pathname || '/';

    const handleSumbmit = async event => {
        event.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        toast('Updated profile');
        navigate(from, { replace: true });
    }
    return (
        <div className='mx-3 md:mx-24'>
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                        <img className='rounded-xl' src={registerImg} alt='' />
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                            <p>Enter your information to register</p>
                        </div>
                        <form onSubmit={handleSumbmit}>
                            <div>

                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label ref={nameRef} className="text-xs font-semibold px-1">Name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John Smith" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label ref={emailRef} className="text-xs font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-12">
                                        <label ref={passRef} className="text-xs font-semibold px-1">Password</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                                    </div>
                                </div>
                                <SocialLogin />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;