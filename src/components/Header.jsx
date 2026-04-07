import React from "react";

export default function Header({ setQuery }) {
  return (
    <header>
      <div className="inner-header">
        <input
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          type="text"
          placeholder="Search"
        />
      </div>
    </header>
  );
}
