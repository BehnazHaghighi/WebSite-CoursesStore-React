import React, { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full text-right"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="mt-2 bg-gray-100 border border-gray-300 rounded-lg">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-200 text-right">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SyllabusDropdowns = ({ syllabus }) => {
  return (
    <div className="w-full max-w-md">
      {syllabus.map((section, index) => (
        <Dropdown
          key={index}
          title={section.title}
          items={section.subsections}
        />
      ))}
    </div>
  );
};

export default SyllabusDropdowns;
