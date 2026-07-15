const ConfirmationModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0

        z-50

        flex
        items-center
        justify-center

        bg-black/70

        backdrop-blur-sm

        px-4
      "
    >

      <div
        className="
          w-full
          max-w-md

          bg-white/5

          backdrop-blur-xl

          border
          border-white/10

          rounded-3xl

          p-6

          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        "
      >

        <h2
          className="
            text-xl
            font-bold

            text-white
          "
        >
          {title}
        </h2>


        <p
          className="
            text-gray-400

            mt-3

            leading-relaxed
          "
        >
          {message}
        </p>



        <div
          className="
            flex
            justify-end

            gap-3

            mt-6
          "
        >

          <button
            onClick={onCancel}

            className="
              px-5
              py-2.5

              rounded-xl

              bg-white/10

              border
              border-white/10

              text-gray-300

              hover:bg-white/20

              transition
            "
          >
            Cancel
          </button>



          <button
            onClick={onConfirm}

            className="
              px-5
              py-2.5

              rounded-xl

              bg-red-500

              text-white

              font-semibold

              hover:bg-red-600

              transition

              shadow-lg
              shadow-red-500/20
            "
          >
            Delete
          </button>


        </div>


      </div>

    </div>
  );
};

export default ConfirmationModal;