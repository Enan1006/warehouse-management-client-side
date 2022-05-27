import React from "react";
import { useNavigate } from "react-router-dom";

const ShowInventoryItems = ({ inventory }) => {
  const { _id, image, name, description, price, quantity, supplier } =
    inventory;
  const navigate = useNavigate();
  const handlenavigateToUpdateStock = id => {
    navigate(`/inventory/${id}`)
  }

  return (
    <div className="border border-gray-200 p-5 rounded-xl shadow-lg shadow-gray-200">

      <img className="w-36 mx-auto" src={image} alt="" />
      <div className="mt-6">
        <h5 className="text-indigo-500 font-semibold text-xl">{name}</h5>
        <p className="font-bold mt-5">Quantity: {quantity}</p>
        <p className="font-bold">Price: ${price}</p>
        <p className="font-bold mb-5">Supplier name: {supplier}</p>
        <p className=" pb-4">{`${description.slice(0, 400)}...`}</p>
      </div>
      <div className="footer">
        <button className="bg-indigo-100 text-indigo-600 px-5 py-2 rounded-md" onClick={() => handlenavigateToUpdateStock(_id)}>Update Stock</button>
      </div>

    </div>
  );
};

export default ShowInventoryItems;
