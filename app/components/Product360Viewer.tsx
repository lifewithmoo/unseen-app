"use client";

import { useState } from "react";


type Props = {
  folder: string;
};


export default function Product360Viewer({
  folder,
}: Props) {


  const images = [
    `${folder}/1.jpg`,
    `${folder}/2.jpg`,
    `${folder}/3.jpg`,
    `${folder}/4.jpg`,
    `${folder}/5.jpg`,
    `${folder}/6.jpg`,
  ];


  const [index, setIndex] = useState(0);


  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {

    const width = e.currentTarget.clientWidth;

    const x = e.nativeEvent.offsetX;


    const position = Math.floor(
      (x / width) * images.length
    );


    setIndex(
      Math.min(position, images.length - 1)
    );

  }



  return (

    <div
      onMouseMove={handleMove}
      className="
      cursor-ew-resize
      overflow-hidden
      rounded-3xl
      "
    >

      <img
        src={images[index]}
        alt="360 product view"
        className="
        h-[800px]
        w-full
        object-cover
        "
      />

    </div>

  );

}