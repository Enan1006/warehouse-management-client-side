import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import registerImg from '../../../Images/login/signup.jpg'


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const navigate = useNavigate();
    let location = useLocation();

    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(
        auth
    );

    const emailRef = useRef('');
    const passRef = useRef('');
    let from = location.state?.from?.pathname || "/";
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);

    }
    let errormessage;
    if (error) {
        toast(`${error?.message}`);
        // toast('Login Unsuccessful');
    }

    const SendPasswordReset = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset link has been sent');
        }
        else {
            toast('Please enter email address');
        }
    }



    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='mx-3 md:mx-24'>
                <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
                    <div class="md:flex w-full">
                        <div class="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                            <img className='rounded-xl' src={registerImg} alt='' />
                        </div>
                        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div class="text-center mb-10">
                                <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
                                <p>Enter your information to login</p>
                            </div>
                            <form onSubmit={handleSignIn}>
                                <div>


                                    <div class="flex -mx-3">
                                        <div class="w-full px-3 mb-5">
                                            <label ref={emailRef} class="text-xs font-semibold px-1">Email</label>
                                            <div class="flex">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex -mx-3">
                                        <div class="w-full px-3 mb-12">
                                            <label ref={passRef} class="text-xs font-semibold px-1">Password</label>
                                            <div class="flex">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex -mx-3">
                                        <div class="w-full px-3 mb-5">
                                            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Login</button>
                                        </div>

                                    </div>
                                    <div>
                                        <p className="mt-3 mb-5">
                                            <button onClick={SendPasswordReset} className="text-sm text-blue-600 hover:underline" href="./forgot-password.html">
                                                Forgot your password?
                                            </button>
                                        </p>
                                    </div>
                                    <SocialLogin />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;