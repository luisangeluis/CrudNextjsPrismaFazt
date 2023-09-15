"use client"
import { useRouter } from "next/navigation";
import React from "react";

const TaskCard = ({ task }) => {
  const router = useRouter();

  const handlerClick=()=>{
    router.push(`/tasks/edit/${task.id}`);
  }

  return (
    <article className="bg-slate-900 hover:bg-slate-800 hover:cursor-pointer" onClick={handlerClick}>
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </article>
  );
};

export default TaskCard;
