import React, { useEffect, useState } from "react";
import useInventoryData from "../../../hooks/useInventoryData";
import ShowInventoryItems from "../../InventoryItems/ShowInventoryItems";

const HomeInventory = () => {

  const [inventorys] = useInventoryData();
  return (
    <div className="container my-24">
      <h2 className='text-indigo-500 text-4xl text-center font-bold my-7'>Inventory Items</h2>
      <div className="grid grid-cols-3 gap-4 mx-6 p-5">
        {inventorys.slice(0, 6).map((inventory) => (
          <ShowInventoryItems
            inventory={inventory}
            key={inventory._id}
          ></ShowInventoryItems>
        ))}
      </div>
    </div>
  );
};

export default HomeInventory;
