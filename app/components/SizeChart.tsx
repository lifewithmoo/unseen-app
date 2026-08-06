"use client";

import { sizeChart } from "@/app/data/sizeChart";


export default function SizeChart() {

  return (

    <div
      className="
        mt-8
        overflow-hidden
        rounded-2xl
        border
        border-white/10
      "
    >

      <table className="w-full text-center">

        <thead
          className="
            bg-zinc-900
            text-xs
            uppercase
            tracking-widest
            text-zinc-400
          "
        >

          <tr>

            <th className="px-4 py-4">
              Size
            </th>

            <th className="px-4 py-4">
              Width
            </th>

            <th className="px-4 py-4">
              Length
            </th>

          </tr>

        </thead>


        <tbody
          className="
            divide-y
            divide-white/10
            text-sm
          "
        >

          {sizeChart.map((item) => (

            <tr key={item.size}>

              <td className="py-4 font-black">
                {item.size}
              </td>

              <td>
                {item.width}
              </td>

              <td>
                {item.length}
              </td>

            </tr>

          ))}

        </tbody>


      </table>


    </div>

  );
}