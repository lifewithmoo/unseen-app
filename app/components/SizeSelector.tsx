"use client";

type SizeSelectorProps = {
  size: string;
  setSize: (size: string) => void;
};


export default function SizeSelector({
  size,
  setSize,
}: SizeSelectorProps) {


  const sizes = [
    "S",
    "M",
    "L",
    "XL",
  ];



  return (

    <div
      className="
        flex
        gap-3
      "
    >

      {sizes.map((item) => (

        <button

          key={item}

          type="button"

          onClick={() => setSize(item)}

          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            text-sm
            font-black
            transition

            ${
              size === item
                ? "border-red-600 bg-red-600 text-white"
                : "border-white/20 text-white hover:border-white"
            }

          `}

        >

          {item}

        </button>

      ))}


    </div>

  );

}