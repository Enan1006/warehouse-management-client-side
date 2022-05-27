import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = () => {

    const { inventoryId } = useParams();
    console.log(inventoryId);
    const navigate = useNavigate();
    const [inventory, setInventory] = useState({});
    const [res, setRes] = useState({});
    const [reStock, setReStock] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventoryId, res])
    const { name, image, description, price, quantity, supplier } = inventory;

    //? Handle Delivery operation
    const handleDeliver = () => {
        if (quantity > 0) {
            const newQuantity = {
                quantity: (quantity - 1)
            };

            const url = `http://localhost:5000/inventory/${inventoryId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity),
            })
                .then(res => res.json())
                .then(data => setRes(data));
        }
    }

    //? Handle restock submittion
    const handleForm = (event) => {
        event.preventDefault();
        const amount = parseInt(event.target.amount.value);
        const newQuantity = {
            quantity: (quantity + amount),
        }

        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => setRes(data))
    }
    return (
        <div className='container '>
            <div className="border my-5" >
                <div className="g-0 shadow  my-4 rounded">
                    <div className="col-sm-4">
                        <img src={image} className="w-4/5" alt="..." />
                    </div>
                    <div className="col-sm-8 P-0">
                        <div className="p-5 px-4">
                            <h5 className="text-center text-3xl text-indigo-600">{name}</h5>
                            <p><b>Price: </b>{price}</p>
                            <p className="">{description}</p>
                            <p><b>Quantity: </b>{quantity}</p>
                            <p><b>SuplierName: </b>{supplier}</p>
                            <div className=''>
                                <button className='' onClick={() => setReStock(!reStock)}>Restock</button>

                                {/* Restock input and submit  */}
                                {reStock && (
                                    <div className="inventory_restock">
                                        <form onSubmit={handleForm}>
                                            <div className="inventory__restock__field">
                                                <input className="inventory__restock__field" type="number" name="amount" placeholder="Enter Number" />
                                            </div>
                                            <div className="inventory__restock__field">
                                                <input className="inventory__restock__field" type="submit" value="Submit" />
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                            <div className="">
                                <button className='m-2' onClick={handleDeliver}>Delivered</button>
                                <button onClick={() => navigate('/manage-items')} className='m-2 btn btn-success'>Manage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;