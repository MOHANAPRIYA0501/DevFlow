const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="mb-6">

      <div
        className="
          relative
        "
      >

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}

          className="
            w-full

            rounded-2xl

            px-5
            py-3.5

            bg-white/5

            backdrop-blur-xl

            border
            border-white/10

            text-white

            placeholder:text-gray-500

            focus:outline-none

            focus:border-yellow-400

            focus:ring-4

            focus:ring-yellow-400/20

            transition-all
            duration-300

            shadow-lg
          "
        />

      </div>

    </div>
  );
};

export default SearchBar;