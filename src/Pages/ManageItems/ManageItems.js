import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventoryData from '../../hooks/useInventoryData';

const ManageItems = () => {
    const [inventories, setInventories] = useInventoryData();
    const navigate = useNavigate();

    const handleDelete = id => {
        console.log(id)
            ;
        const proceed = window.confirm('Are you Sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })

                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining)
                })

        }
    }
    return (
        <div className='container text-start my-5'>
            <h1 className="text-indigo-600 text-4xl text-center my-10 font-bold">Manage Items</h1>
            <button onClick={() => navigate('/additem')} className='py-3 px-6 bg-green-200 text-green-600'><i class="fa-solid fa-plus pr-3"></i>Add New Item</button>
            {
                inventories.map(inventory => <div key={inventory._id}>


                    <div className="flex" >
                        <div className="mx-10 p-7 md:flex border my-6 shadow-xl rounded-2xl">
                            <div className="flex-none">
                                <img src={inventory.image} className="w-28 mx-auto block items-center" alt="..." />
                            </div>
                            <div className="flex-grow">
                                <div className="pl-5">
                                    <h5 className="text-xl font-bold text-indigo-600 my-4">{inventory.name}</h5>
                                    <p><b>Price: </b>${inventory.price}</p>
                                    <p className="card-text">{inventory.description.slice(0, 200)}</p>
                                    <p><b>Quantity: </b>{inventory.quantity}</p>
                                    <p><b>Suplier Name: </b>{inventory.supplier}</p>
                                    <div className='d-grid mt-2 w-50'>

                                        <button onClick={() => handleDelete(inventory._id)} className='py-3 px-6 mb-7 bg-red-200 text-red-600 rounded-md mt-3'> <span><i class="fa-solid fa-trash-can"></i></span> Delete Item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)

            }

        </div>
    );
};

export default ManageItems;