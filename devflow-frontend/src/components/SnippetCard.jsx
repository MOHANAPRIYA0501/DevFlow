const SnippetCard = ({ snippet, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">

      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {snippet.title}
          </h3>

          <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
            {snippet.language}
          </span>
        </div>

       <div className="flex flex-col sm:flex-row gap-2">

          <button
            onClick={() => onEdit(snippet)}
            className="w-full sm:w-auto px-3 py-1 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white transition"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(snippet.id)}
            className="w-full sm:w-auto px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
          >
            Delete
          </button>

        </div>
      </div>

      {snippet.description && (
        <p className="mt-4 text-gray-600">
          {snippet.description}
        </p>
      )}

<pre className="mt-4 bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto text-sm shadow-inner">        <code>{snippet.code}</code>
      </pre>

    </div>
  );
};

export default SnippetCard;