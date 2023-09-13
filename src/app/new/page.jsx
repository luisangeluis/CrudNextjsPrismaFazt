"use client";

import { useState } from "react";

const NewPage = () => {
  const [dataForm, setDataForm] = useState({ title: "", description: "" });
  console.log(dataForm);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange=(e)=>{
    console.log(e);
    const key = e.target.id
    setDataForm({...dataForm,[key]:e.target.value})
  }
  return (
    <section className="h-screen flex justify-center items-center">
      <form
        action=""
        className="bg-slate-800 p-10 w-2/4"
        onSubmit={handlerSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm p-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 m-2 w-full text-black"
          placeholder="Type a title"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description" className="font-bold text-sm p-2">
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 m-2 w-full text-black"
          placeholder="Type a title"
          onChange={handleChange}
        ></textarea>
        <br />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 mx-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
};

export default NewPage;
