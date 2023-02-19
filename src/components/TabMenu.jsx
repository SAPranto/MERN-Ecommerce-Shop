import React from 'react'
import { AiFillFire, AiFillCarryOut } from "react-icons/ai";
import { GiRunningShoe } from "react-icons/gi";
const TabMenu = () => {
  return (
          <ul className="flex flex-wrap items-center py-10 justify-center bg-white text-cyan-800 gap-10 md:gap-20 md:text-lg font-semibold ">
          <li className="flex gap-1 md:gap-2 cursor-pointer">
            <GiRunningShoe className="md:mt-1 text-green-700 text-xl " />
            New Arrivals
          </li>
          <li className="flex gap-1 md:gap-2 cursor-pointer">
            <AiFillFire className="md:mt-1 text-red-600 text-xl" />
            Most Selling
          </li>
          <li className="flex gap-1 md:gap-2 cursor-pointer">
            <AiFillCarryOut className="md:mt-1 text-sky-400 text-xl" />
            Pre-Order
          </li>
        </ul>
  )
}

export default TabMenu