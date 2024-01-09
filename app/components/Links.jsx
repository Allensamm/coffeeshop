import React from "react";
import Link from "next/link";

const Links = () => {
  return (
    <div>
      <ul className="w-48 text-sm font-medium text-white">
        <li className="w-full px-4 py-2 ">
          Profile
        </li>
        <li className="w-full px-4 py-2">
          Settings
        </li>
        <li className="w-full px-4 py-2">
          Messages
        </li>
        <li className="w-full px-4 py-2 rounded-b-lg">Download</li>
      </ul>
    </div>
  );
};

export default Links;
