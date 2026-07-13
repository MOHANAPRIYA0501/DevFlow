import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Spinner from "./Spinner";
import EmptyState from "./EmptyState";

const TaskSection = ({
  tasks,
  loading,
  editingTask,
  setEditingTask,
  fetchTasks,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <TaskForm
        onTaskCreated={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <h2 className="text-2xl font-bold mt-8 mb-6">
        My Tasks
      </h2>

      {loading && <Spinner />}

      {!loading && tasks.length === 0 && (
        <EmptyState />
      )}

      {!loading && tasks.length > 0 && (
        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default TaskSection;