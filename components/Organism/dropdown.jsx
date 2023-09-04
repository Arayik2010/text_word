import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "react-dropdown/style.css";

const DropdownUser = ({  defaultOption, classes }) => {

  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    const linkMap = {
      fruit: '/posts/users',
      vegetable: '/posts/game',
      meat: '/posts/textWord',
    };

    router.push(linkMap[selectedValue]);
  };

  const options = [
    { label: "Fruit", value: "fruit"},

    { label: "Vegetable", value: "vegetable"},

    { label: "Meat", value: "meat" },
  ];

  return (
    <div>
        <select className="mt-2 mr-2 cursor-pointer w-28 text-center rounded-lg " value={selectedOption} onChange={handleSelectChange}>
          {options.map((option) => (
            <option className="cursor-pointer"  key={option.label} value={option.value}>
              {option.label}
              </option>
          ))}
        </select>
    </div>
  );
};

export default DropdownUser;
