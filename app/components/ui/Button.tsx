type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        rounded-full
        bg-red-600
        px-12
        py-5
        text-base
        font-black
        uppercase
        tracking-[0.3em]
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:bg-red-700
      "
    >
      {children}
    </button>
  );
}