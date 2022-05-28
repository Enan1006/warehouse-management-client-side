import React from 'react';
import persenter from '../../../Images/persenter/persenter.png';

const Process = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                    <p className="ml-2 text-indigo-300 uppercase tracking-loose">Working Process</p>
                    <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Delivery</p>
                    <p className="text-sm md:text-base text-gray-50 mb-4">
                        Here’s your guide to the delivery process. Go through all the steps to know the exact process of the
                        delivery.
                    </p>
                </div>
                <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                    <div className="container mx-auto w-full h-full">
                        <div className="relative wrap overflow-hidden p-10 h-full">
                            <div className="border-2-2 border-indigo-500 absolute h-full border pill"
                            ></div>
                            <div className="border-2-2 border-indigo-500 absolute h-full border pill"
                            ></div>
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    <p className="mb-3 text-base text-indigo-300">1</p>
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1  w-5/12 px-1 py-4 text-left">
                                    <p className="mb-3 text-base text-indigo-300">2</p>
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Choose Product</h4>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    <p className="mb-3 text-base text-indigo-300">3</p>
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Place Order</h4>
                                </div>
                            </div>

                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>

                                <div className="order-1  w-5/12 px-1 py-4">
                                    <p className="mb-3 text-base text-indigo-300">4</p>
                                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Product Will be delivered</h4>
                                </div>
                            </div>
                        </div>
                        <img className="mx-auto -mt-36 md:-mt-36" src={persenter} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;