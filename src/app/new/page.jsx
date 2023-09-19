"use client";

import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const [dataForm, setDataForm] = useState({ title: "", description: "" });
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      getTask()
        .then(res => res.json())
        .then((res) => {
          console.log(res);
          setDataForm({ title: res.response.title, description: res.response.description });
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const getTask = async () => await fetch(`/api/tasks/${params.id}`);

  const updateTask = async (params) =>
    await fetch(`/api/tasks/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json",
      },
    });

  const postTask = async () => await fetch("/api/tasks/", {
    method: "POST",
    body: JSON.stringify(dataForm),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const deleteTask = async (params) => {
    console.log("hola");
    await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    })
    router.refresh();
    router.push("/")
  }


  const handlerSubmit = async (e) => {
    e.preventDefault();

    params.id ? await updateTask(params) : await postTask();

    router.refresh();

    router.push("/");
  }

  const handlerChange = (e) => {
    const key = e.target.id;
    setDataForm({ ...dataForm, [key]: e.target.value });
  };

  return (
    <section className="h-screen flex justify-center items-center p-5">
      <form
        className="bg-slate-800 p-10 md:w-2/4 lg:w-1/4"
        onSubmit={handlerSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm p-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Type a title"
          onChange={handlerChange}
          value={dataForm?.title}
        />
        <br />
        <label htmlFor="description" className="font-bold text-sm p-2">
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 w-full text-black mb-4"
          placeholder="Type a title"
          onChange={handlerChange}
          value={dataForm?.description}
        ></textarea>
        <br />
        <div className="flex justify-between ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
            {params.id ? "Update" : "Create"}
          </button>
          {
            params.id && <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded" type="button"
              onClick={async()=>await deleteTask(params)}
            >
              Delete
            </button>
          }
        </div>
      </form>
    </section>
  );
};

export default NewPage;
