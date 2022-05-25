import React from 'react';

const Features = () => {
    return (
        <div>
            <div className='py-12'>
                <h2 className='text-indigo-500 text-4xl text-center font-bold my-7'>Our Features</h2>
                <div className='grid grid-cols-3 gap-5 mx-9'>
                    <div className=' border-2 rounded-lg border-gray-100 p-4 shadow-lg shadow-indigo-400'>
                        <h3 className='text-center text-2xl my-5 text-black-400 font-semibold'>SCHEDULE SERVICE</h3>
                        <p>Integrated with your DMS, enable quick and easy service appointments, and empower customers to view service history, invoices and F&I.</p>
                    </div>
                    <div className=' border-2 rounded-lg border-gray-100 p-4 shadow-lg shadow-indigo-400'>
                        <h3 className='text-center text-2xl my-5 text-black-400 font-semibold'>DIGITAL RETAILING</h3>
                        <p>Bring the showroom to your customer’s smartphone with live inventory feeds and the ability to trade-in, pre-order, schedule test drives, and apply for financing..</p>
                    </div>
                    <div className=' border-2 rounded-lg border-gray-100 p-4 shadow-lg shadow-indigo-400'>
                        <h3 className='text-center text-2xl my-5 text-black-400 font-semibold'>F&I MENU SELLING</h3>
                        <p>Incentivize customers to buy F&I packages by rewarding them for purchasing add-ons.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;