import TaskCard from "@/components/TaskCard";
import { Container } from "postcss";

const getTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const data = await res.json();
  console.log(data);
  return data;
};

const HomePage = async () => {
  const tasks = await getTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-2 mt-10">
        {tasks.response.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </section>
  );
};

export default HomePage;
