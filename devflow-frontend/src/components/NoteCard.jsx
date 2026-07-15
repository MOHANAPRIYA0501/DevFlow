const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl

        border
        border-white/10

        rounded-3xl

        shadow-[0_20px_40px_rgba(0,0,0,0.25)]

        p-6

        hover:border-yellow-400/30
        hover:-translate-y-1

        transition-all
      "
    >

      <h3 className="text-xl font-bold text-white">
        {note.title}
      </h3>


      <p className="text-gray-400 mt-3 whitespace-pre-wrap">
        {note.content}
      </p>


      <div className="flex flex-col sm:flex-row gap-3 mt-6">

        <button
          onClick={() => onEdit(note)}
          className="
            px-4 py-2 rounded-xl

            bg-gradient-to-r
            from-yellow-300
            to-amber-500

            text-black
            font-semibold
          "
        >
          Edit
        </button>


        <button
          onClick={() => onDelete(note.id)}
          className="
            px-4 py-2 rounded-xl

            bg-red-500/80
            hover:bg-red-600

            text-white
            font-semibold
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default NoteCard;