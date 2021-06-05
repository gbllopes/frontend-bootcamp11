import React, { Children } from "react";

export default function Header({ name, children }) {
  return (
    <header>
      <h1>{name}</h1>
      {children}
    </header>
  );
}
