import AuthLeftPanel from "./AuthLeftPanel";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-neutral-950
      "
    >

      {/* Gold Ambient Glow */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[450px]
          h-[450px]
          bg-yellow-500/10
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-150px]
          right-[-100px]
          w-[500px]
          h-[500px]
          bg-amber-500/10
          rounded-full
          blur-3xl
        "
      />

      {/* Left Branding */}
      <AuthLeftPanel />


      {/* Right Form */}
      <div
        className="
          relative
          z-10
          w-full
          lg:w-1/2
          flex
          items-center
          justify-center
          p-6
          lg:p-12
        "
      >

        <div className="w-full max-w-md">
          {children}
        </div>

      </div>

    </div>
  );
};

export default AuthLayout;