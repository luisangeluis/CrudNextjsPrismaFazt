"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  console.log(params);
  const [dataForm, setDataForm] = useState({ title: "", description: "" });
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      getTask()
        .then(res=>res.json())
        .then((res) => {
          setDataForm({ title: res.title, description: res.description });
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const getTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`);

    return data;
  };

  const updateTask = async () => {
    const res = await fetch(`/api/task`);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    // console.log(dataForm);
    let res = "";
    let data = {};

    if (params.id) {
      res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(dataForm),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      res = await fetch("/api/tasks/", {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    data = await res.json();

    // console.log(data);
    router.push("/");
  };

  const handleChange = (e) => {
    // console.log(e);
    const key = e.target.id;
    setDataForm({ ...dataForm, [key]: e.target.value });
  };

  return (
    <section className="h-screen flex justify-center items-center p-10">
      <form
        action=""
        className="bg-slate-800 p-10 md:w-2/4 lg:w-1/4"
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
