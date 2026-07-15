import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <EmptyState
        title="No Tasks Yet"
        message="Create your first task and start organizing your workflow."
      />
    );
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