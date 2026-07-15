const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-10">

      <div
        className="
          h-12
          w-12

          animate-spin

          rounded-full

          border-4

          border-yellow-400

          border-t-transparent

          shadow-lg

          shadow-yellow-400/20
        "
      ></div>

    </div>
  );
};

export default Spinner;