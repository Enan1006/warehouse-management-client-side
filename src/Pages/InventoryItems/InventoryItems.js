import React from "react";
import useInventoryData from "../../hooks/useInventoryData";
import ShowInventoryItems from "./ShowInventoryItems";

const InventoryItems = () => {
  const [inventories] = useInventoryData();
  return (
    <div className="my-10">
      <h3 className="text-center my-12 text-indigo-600 text-6xl">Inventory Items</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8">
        {inventories.map((inventory) => (
          <ShowInventoryItems
            key={inventory._id}
            inventory={inventory}
          ></ShowInventoryItems>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;