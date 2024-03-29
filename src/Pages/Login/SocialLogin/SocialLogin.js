import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            <div className="flex items-center justify-center space-x-2">
                <span className="h-px w-16 bg-gray-300"></span>
                <span className="text-gray-500 font-normal">OR</span>
                <span className="h-px w-16 bg-gray-300"></span>
            </div>
            <button onClick={() => signInWithGoogle()} className='px-7 mt-4 text-white py-4 bg-blue-500 border rounded-md border-gray-300'><i className="fa-brands fa-google mr-2"></i>Signup with Google</button>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;