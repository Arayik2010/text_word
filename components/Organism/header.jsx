import React from "react";
import { Navigation } from "./navigation";
import DropdownUser from "./dropdown";

const options = [
  'one', 'two', 'three','four','five'
]

const defaultOption = options[0];

export const Header = () => {
  return (
    <div className="flex">
      <Navigation />
      <p className="mt-2 mr-2">Arayik</p>
      <div>
        <DropdownUser
        classes = ' mt-4 cursor-pointer w-24  text-center   rounded-lg '
         options={options}
          defaultOption={defaultOption}
           />
      </div>
    </div>
  );
};
