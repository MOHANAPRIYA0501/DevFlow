import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default TaskList;