import React from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
export const TopBar = () => {
  return (
    <div className=" border-gray-300 border-b-2">
      <div className="w-[] m-auto flex justify-between items-center  py-3">
        <div>
          <p className="text-gray-600 font-sans "> Contact us : 03103388069</p>
        </div>
        <div>
          <ul className="flex gap-7 text-gray-600">
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
