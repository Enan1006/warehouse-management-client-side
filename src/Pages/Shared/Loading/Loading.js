import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen'>
            <div className='w-100 h-full d-flex justify-content-center align-items-center flex justify-center items-center'>
                <div className="border border-blue-300 shadow rounded-md p-4 h-2/4 w-2/4 mx-auto">
                    <div className="animate-pulse flex space-x-4 items-baseline">
                        <div className="rounded-full bg-slate-200 h-28 w-28"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-6 bg-slate-200 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-6 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;