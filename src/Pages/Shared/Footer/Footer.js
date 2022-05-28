import React from 'react';

const Footer = () => {
    return (
        <div className='bg-indigo-600 py-8 px-10'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='text-left  text-white'>
                    <h3 className='text-2xl mb-4'>Contact Info</h3>
                    <p><i className="fa-solid fa-location-dot pr-2"></i>Uttara, Dhaka, Bangladesh</p>
                    <p><i className="fa-solid fa-phone pr-2"></i>+880 1840052000</p>
                    <p><i className="fa-solid fa-globe pr-2"></i>www.ihenan.com</p>
                </div>
                <div className='text-left text-white'>
                    <h3 className='text-2xl mb-4'>Opening Hours</h3>
                    <div>
                        <p>Mon-Friday</p>
                        <p>8AM - 10PM</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center space-y-4">
                        <h1 className="font-bold text-2xl text-center  text-white">Email Subscription</h1>
                        <input type="text" placeholder="Email" className="border-2 rounded-lg w-full h-12 px-4" />
                        <button className="bg-indigo-200 text-indigo-600 rounded-md font-semibold px-4 py-3 w-full">Subscribe</button>

                    </div>

                </div>
            </div>
            <div className='h-2 mx-auto py-5 mt-2'>
                <hr></hr>
            </div>
            <div>
                <p className='text-white'>&copy;All right reserved <strong>Imdadul Haque Enan </strong>{new Date().getFullYear()} </p>
            </div>
        </div>
    );
};

export default Footer;