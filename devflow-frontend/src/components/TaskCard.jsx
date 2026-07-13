const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <button onClick={() => onEdit(task)}>
        Edit
      </button>

      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;