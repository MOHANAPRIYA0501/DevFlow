const SnippetCard = ({ snippet, onEdit, onDelete }) => {
  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl

        border
        border-white/10

        rounded-3xl

        p-6

        hover:border-yellow-400/30

        transition-all
      "
    >

      <div className="flex justify-between items-start gap-4">

        <div>

          <h3 className="text-xl font-bold text-white">
            {snippet.title}
          </h3>


          <span
            className="
              inline-block
              mt-2

              px-3 py-1

              rounded-full

              bg-yellow-400/10

              border
              border-yellow-400/20

              text-yellow-300

              text-sm
            "
          >
            {snippet.language}
          </span>

        </div>


        <div className="flex flex-col sm:flex-row gap-2">

          <button
            onClick={() => onEdit(snippet)}
            className="
              px-3 py-2 rounded-xl

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
            onClick={() => onDelete(snippet.id)}
            className="
              px-3 py-2 rounded-xl

              bg-red-500/80
              hover:bg-red-600

              text-white
            "
          >
            Delete
          </button>

        </div>

      </div>


      {snippet.description && (
        <p className="mt-4 text-gray-400">
          {snippet.description}
        </p>
      )}


      <pre
        className="
          mt-4

          bg-black/50

          text-green-400

          rounded-2xl

          p-4

          overflow-x-auto

          text-sm

          border
          border-white/10
        "
      >
        <code>
          {snippet.code}
        </code>
      </pre>


    </div>
  );
};

export default SnippetCard;