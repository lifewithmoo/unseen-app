"use client";

interface SizeSelectorProps {
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

export default function SizeSelector({
  selectedSize,
  setSelectedSize,
}: SizeSelectorProps) {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="mt-12">
      <p className="mb-5 text-sm uppercase tracking-[0.3em]">
        Size
      </p>

      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setSelectedSize(size)}
            className={`h-14 w-14 rounded-full border transition ${
              selectedSize === size
                ? "border-red-600 bg-red-600 text-white"
                : "border-white/20 text-white hover:border-red-600"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}