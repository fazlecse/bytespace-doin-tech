import React from "react";

interface SearchBoxProps {
  className?: string;
}

const SearchBox = ({ className = "" }: SearchBoxProps) => {
  return (
    <div className={`max-w-xl mx-auto ${className}`}>
      <div className="flex items- gap-3">
        <div className="flex-1 flex items-center bg-white rounded-3xl px-4 py-4">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 mr-3"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="text"
            placeholder="Course, topic, creator"
            className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
          />
        </div>

        <button className="bg-primary hover:bg-primary/90 text-heading font-semibold text-sm px-7.5 py-3 rounded-3xl transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;