import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/additem`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="mx-4 md:mx-36 my-11">
      <h1 className="text-indigo-600 text-4xl text-center font-bold my-10">Add Product</h1>
      <form
        className="md:w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">
            <h6>Product Name</h6>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("name")}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">
            <h6>Price</h6>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            {...register("price")}
          />
        </div>

        <div className="mb-6">
          <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <h6>Quantity</h6>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            {...register("quantity")}
          />
        </div>

        <div className="mb-6">
          <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <h6>Supplier Name</h6>
          </label>

          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("supplier")}
          />
        </div>

        <div className="mb-6">
          <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <h6>Description</h6>
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("description")}
          />
        </div>

        <div className="mb-6">
          <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <h6>Product Image URL</h6>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            {...register("image")}
          />
        </div>

        <input
          className="px-32 py-4 bg-indigo-600 text-white rounded-lg hover:text-indigo-600  border hover:bg-white hover:cursor-pointer"
          type="submit"
          value="Publish"
        />
      </form>
    </div>
  );
};

export default AddItem;
